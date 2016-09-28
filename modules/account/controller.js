import { ServerRouter, createServerRenderContext } from 'react-router'
import { omit } from "underscore"
import path from "path"

import ReactComponent from "./react_server"
import layoutPresenter from "tisko-layout"
import AccountDetails from "./mock_data/details"
import getUserAddress from "./database/api/getUserAddress"
import {filterAndValidate, filterAndValidateAddress, validateAddressId, filterAndValidateAddressToUpdate, filterAndValidateProfileFields, filterAndValidatePasswords} from "./presenters/filter_validate"
import addUserAddress from "./database/api/addUserAddress"
import updateUserAddress from "./database/api/update_user_address"
import updateUserInfo from "./database/api/update_user_info"
import deleteUserAddress from "./database/api/deleteUserAddress"
import updateAccountPassword from "./database/api/update_password"

let debug = require("debug")('Account:controllers')

const controller = ({modules}) => {
  const {pugCompiler, logger, jsAsset, cssAsset, queryDb} = modules
  const isSecured = true
  const title = 'Tisko - My Account'
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)

  return {
    main: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session, url: location, params: {category = ''}} = req

      const {isLogged = false} = layoutPresenter({session, topNav: false}, page, {jsAsset})

      if(isSecured && !isLogged) {
        responders.redirectForAuthentication(location, "authenticate", logger)
        return
      }

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

    details: ({attributes, responders, page}) => {
      let {req, res} = attributes
      let { pathname } = req.query

      pathname = pathname.replace('/account/', '')
      let json = omit(AccountDetails, (value, key) => key === pathname)

      responders.json(json)
    },

    subDetails: ({attributes, responders, page}) => {
      let {req, res} = attributes
      const {category, subCategory} = req.params
      const {session} = req
      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const userid = session.user.id

      getUserAddress([userid], {logger, queryDb}, (err, addresses) => {
        if(!err) {
          responders.json(addresses)
        } else if(err.rowCount === 0) {
          responders.json({rowCount: 0})
        } else {
          responders.json(err, {message: 'no records'}, 400 )
        }
      })
    },

    addAddress:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, addressData } = filterAndValidateAddress(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id

      addressData.unshift(userid)

      addUserAddress(addressData, {logger, queryDb}, (err, result) => {
        if(!err) {
          responders.json(result)
        }
        responders.json(null, {message: 'Bad Input'}, 400 )
      })
    },

    updateAddress:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, addressData } = filterAndValidateAddressToUpdate(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id

      updateUserAddress(addressData, {logger, queryDb}, (err, result) => {
        if(!err) {
          responders.json(result)
        }
        responders.json(null, {message: 'Bad Input'}, 400 )
      })
    },

    deleteAddress:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, addressData } = validateAddressId(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id

      addressData.push(userid)

      deleteUserAddress(addressData, {logger, queryDb}, (err, result) => {
        responders.json({count: result.rowCount})
      })
    },

    updateAddress:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, addressData } = filterAndValidateAddressToUpdate(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id

      updateUserAddress(addressData, {logger, queryDb}, (err, result) => {
        if(!err) {
          responders.json(result)
        }
        responders.json(null, {message: 'Bad Input'}, 400 )
      })
    },

    updateProfile:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, userData } = filterAndValidateProfileFields(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id
      userData.push(userid)

      updateUserInfo(userData, {logger, queryDb}, (err, result) => {
        if(!err) {
          responders.json(result)
        }
        responders.json(null, {message: 'Bad Input'}, 400 )
      })
    },

    updatePassword:({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      if(!session || !session.user || !session.user.id) {
        responders.json(null, {message: 'session timed out'}, 401 )
        return
      }

      const { err, userData } = filterAndValidatePasswords(req.body)
      if(err) {
        responders.json(null, {message: 'Bad Input'}, 400 )
        return
      }

      const userid = session.user.id
      userData.unshift(userid)

      updateAccountPassword(userData, {logger, queryDb}, (err, result) => {
        if(!err) {
          responders.json(result)
        }
        responders.json(null, {message: 'Bad Input'}, 400 )
      })
    }
  }
}

export default controller
