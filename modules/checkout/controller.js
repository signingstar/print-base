import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { omit } from "underscore"
import path from "path"

import ReactComponent from "./react_server"
import layoutPresenter from "tisko-layout"
import configureStore from "./frontend/store"
import routes from "./frontend/routes"
import AccountDetails from "./mock_data/details"

let debug = require("debug")('Checkout:controllers')

const checkoutController = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const isSecured = true
  const title = 'Tisko - Checkout Page'
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)

  return {
    main: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session, url: location, params: {category}} = req

      const memoryHistory = createMemoryHistory(location)
      const store = configureStore(memoryHistory)
      const history = syncHistoryWithStore(memoryHistory, store)

      const { isLogged = false } = layoutPresenter({session, topNav: false}, page, {jsAsset})

      if(isSecured && !isLogged) {
        responders.redirectForAuthentication(location, "authenticate", logger)
        return
      }

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`)
          let {reactHTML, preloadedState} = ReactComponent(renderProps, category, history)

          page.set( {
            javascript: jsAsset('checkoutjs'),
            stylesheet: cssAsset('checkoutcss'),
            title,
            body_class: 'checkout',
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

export default checkoutController
