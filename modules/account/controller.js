import path from "path"

import ReactComponent from "./react_server"
import layoutPresenter from "tisko-layout"
import { getAccountDetails, addUserAddress, updateAccountDetails, deleteUserAddress } from "./presenters/api_executor"
import { ACCOUNT_INFO, ACCOUNT_PASSWORD, USER_ADDRESS} from "./modules"

let debug = require("debug")('Account:controllers')

const controller = ({modules}) => {
  const { pugCompiler, logger, jsAsset, cssAsset, queryDb } = modules
  const isSecured = true
  const title = 'Tisko - My Account'
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const localModule = { logger, queryDb }

  return {
    main: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session, url: location, params} = req

      const {isLogged = false} = layoutPresenter({session, topNav: false}, page, {jsAsset})

      if(isSecured && !isLogged) {
        responders.redirectForAuthentication(location, "authenticate", logger)
        return
      }

      let {category = '', subCategory} = params

      category = subCategory ? subCategory : category

      const userid = session.user.id

      ReactComponent({location, category, userid}, {logger, queryDb}, (err, reactHTML, preloadedState) => {
        if(err) {
          if(err.reason === 'redirect') {
            res.writeHead(301, {
              Location: result.redirect.pathname
            })
            res.end()
          } else if(err.reason === 'missed') {
            // res.writeHead(404)
          }
        }
        page.set( {
          javascript: jsAsset('accountjs'),
          stylesheet: cssAsset('accountcss'),
          body_class: 'account',
          title,
          reactHTML,
          preloadedState
        })

        responders.html(renderHTML(page))
      })
    },

    subDetails: ({attributes, responders, page}) => getAccountDetails({attributes, responders, page}, localModule),

    addAddress:({attributes, responders, page}) => addUserAddress({attributes, responders, page}, localModule),

    deleteAddress:({attributes, responders, page}) => deleteUserAddress({attributes, responders, page}, localModule),

    updateAddress:({attributes, responders, page}) => updateAccountDetails(USER_ADDRESS, {attributes, responders, page}, localModule),

    updateProfile:({attributes, responders, page}) => updateAccountDetails(ACCOUNT_INFO, {attributes, responders, page}, localModule),

    updatePassword:({attributes, responders, page}) => updateAccountDetails(ACCOUNT_PASSWORD, {attributes, responders, page}, localModule)
  }
}

export default controller
