import path from "path"
import layoutPresenter from "tisko-layout"

import ReactComponent from "./react_server"
import configureStore from "./frontend/store"
import routes from "./frontend/routes"

let debug = require("debug")('Services:controllers')

const ourServicesController = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Printing Services'

  return {
    main: function({attributes, responders, page}) {
      const {req, res} = attributes
      const {session, url: location, params: {category}} = req

      layoutPresenter({session}, page, {jsAsset})

      ReactComponent({location}, (err, reactHTML, preloadedState) => {
        if(err) {
          if(err.reason === 'redirect') {
            res.writeHead(302, {
              Location: err.location
            })

            return res.end()
          } else if(err.reason === 'missed') {
            res.status(404)
          } else if(err.reason === 'order_not_found') {
            res.redirect('/')
          }
        }

        page.set( {
          promotional_header: false,
          showFooter: true,
          javascript: jsAsset('servicesjs'),
          stylesheet: cssAsset('servicescss'),
          body_class: 'our-services',
          title,
          reactHTML,
          preloadedState
        })

        responders.html(renderHTML(page))
      })
    }
  }
}

export default ourServicesController
