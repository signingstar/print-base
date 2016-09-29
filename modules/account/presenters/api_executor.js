import getUserDetails from "../database/api/get_user_details"
import getUserAddress from "../database/api/get_user_address"
import addAddress from "../database/api/add_user_address"
import { updateAccountInfo, updateAccountPassword, updateUserAddress } from "../database/api/db_updates"
import deleteAddress from "../database/api/delete_user_address"
import { filterAndValidateAccountDetails } from "./filter_validate"
import { filterAndValidate, filterAndValidateAddress, validateAddressId } from "./filter_validate"
import { ACCOUNT_INFO, ACCOUNT_PASSWORD, USER_ADDRESS} from "../modules"

const apiCallType = (type) => {
  let apiType

  switch (type) {
    case ACCOUNT_INFO:
      apiType = updateAccountInfo
      break
    case ACCOUNT_PASSWORD:
      apiType = updateUserAddress
      break
    case USER_ADDRESS:
      apiType = updateAccountPassword
      break
  }

  return apiType
}

export const updateAccountDetails = (type, {attributes, responders, page}, {logger, queryDb}) => {
  const {req, res} = attributes
  const {session} = req

  if(!session || !session.user || !session.user.id) {
    responders.json(null, {message: 'session timed out'}, 401 )
    return
  }

  const { err, accountData } = filterAndValidateAccountDetails(type, req.body)
  if(err) {
    responders.json(null, {message: 'Bad Input'}, 400 )
    return
  }

  const userid = session.user.id
  accountData.unshift(userid)
  const apiType = apiCallType(type)

  apiType(accountData, {logger, queryDb}, (err, result) => {
    if(!err) {
      responders.json(result)
    }
    responders.json(null, {message: 'Internal Server Error'}, 500 )
  })
}

export const deleteUserAddress = ({attributes, responders, page}, {logger, queryDb}) => {
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

  deleteAddress(addressData, {logger, queryDb}, (err, result) => {
    responders.json({count: result.rowCount})
  })
}

export const addUserAddress = ({attributes, responders, page}, {logger, queryDb}) => {
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

  addAddress(addressData, {logger, queryDb}, (err, result) => {
    if(!err) {
      responders.json(result)
    }
    responders.json(null, {message: 'Bad Input'}, 400 )
  })
}

export const getAccountDetails = ({attributes, responders, page}, {logger, queryDb}) => {
  let {req, res} = attributes
  const {category} = req.params
  const {session} = req
  if(!session || !session.user || !session.user.id) {
    responders.json(null, {message: 'session timed out'}, 401 )
    return
  }

  const userid = session.user.id
  const fetch = category === 'profile' ? getUserDetails : getUserAddress

  fetch([userid], {logger, queryDb}, (err, result) => {
    if(!err) {
      responders.json(result)
    } else if(err.rowCount === 0) {
      responders.json({rowCount: 0})
    } else {
      responders.json(err, {message: 'no records'}, 400 )
    }
  })
}
