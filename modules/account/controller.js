import { omit } from "underscore"
import path from "path"

import ReactComponent from "./react_server"
import layoutPresenter from "tisko-layout"
import AccountDetails from "./mock_data/details"

let debug = require("debug")('Account:controllers')

const controller = ({modules}) => {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const isSecured = true
  const title = 'Tisko - My Account'
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)

  return {
    main: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session, url: location, params: {category}} = req

      const {isLogged = false} = layoutPresenter({session, topNav: false}, page, {jsAsset})

      if(isSecured && !isLogged) {
        responders.redirectForAuthentication(location, "authenticate", logger)
        return
      }

      ReactComponent(location, category, (err, reactHTML, preloadedState) => {
        if(err) {
          const { statusCode, redirectLocation } = err;
          if(redirectLocation) {
            let redirectionPath = redirectLocation.pathname + redirectLocation.search
            logger.info(`Redirecting to: ${redirectionPath}`)
            res.redirect(302, redirectionPath)
          } else {
            logger.info(`renderProps is not passed`)
            responders.error()
          }
        } else {
          page.set( {
            javascript: jsAsset('accountjs'),
            stylesheet: cssAsset('accountcss'),
            body_class: 'account',
            title,
            reactHTML,
            preloadedState
          })

          responders.html(renderHTML(page))
        }
      })
    },

    details: ({attributes, responders, page}) => {
      let {req, res} = attributes
      let { pathname } = req.query

      pathname = pathname.replace('/account/', '')
      let json = omit(AccountDetails, (value, key) => key === pathname)

      responders.json(json)
    }
  }
}

export default controller
