import { createMemoryHistory, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import path from "path"
import layoutPresenter from "tisko-layout"

import ReactComponent from "./react_server"
import configureStore from "./frontend/store"
import routes from "./frontend/routes"

let debug = require("debug")('Services:controllers')

const controller = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Marketing Printing'

  return {
    main: function({attributes, responders, page}) {
      const {req, res} = attributes
      const {session, url: location, params: {category}} = req

      const memoryHistory = createMemoryHistory(location)
      const store = configureStore(memoryHistory)
      const history = syncHistoryWithStore(memoryHistory, store)

      layoutPresenter({session}, page, {jsAsset})

      Route({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`)
          let {reactHTML, preloadedState} = ReactComponent(renderProps, history)

          page.set( {
            promotional_header: false,
            showFooter: true,
            javascript: jsAsset('marketingjs'),
            stylesheet: cssAsset('servicescss'),
            body_class: 'marketing',
            title,
            reactHTML,
            preloadedState
          })

          responders.html(renderHTML(page))
        } else if (redirectLocation) {
          let redirectionPath = redirectLocation.pathname + redirectLocation.search
          logger.info(`Redirecting to: ${redirectionPath}`)
          res.redirect(302, redirectionPath)
        }
        else {
          logger.info(`renderProps is not passed`)
          responders.error()
        }
      })
    }
  }
}

export default controller
