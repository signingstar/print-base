import validator, { isAlpha, isAlphaNumeric, isEmail, isEmpty, isNumeric, matches, trim } from "validator"
import xssFilters from "xss-filters"
import _ from "underscore"

const errorMessage = 'Please provide correct input'

export const validateAddressForm = ({ id, address_line1, address_line2, city, state, country, zipcode, landmark }) => {
  let err = {}

  address_line1 = xssFilters.inHTMLData(trim(address_line1))
  address_line2 = xssFilters.inHTMLData(trim(address_line2))
  city = xssFilters.inHTMLData(trim(city))
  state = xssFilters.inHTMLData(trim(state))
  zipcode = xssFilters.inHTMLData(trim(zipcode))
  landmark = xssFilters.inHTMLData(trim(landmark))
  country = xssFilters.inHTMLData(trim(country))
  id = id ? xssFilters.inHTMLData(trim(id)) : undefined

  verifyAndAttachError('address_line1', address_line1, 'withSpaces', err)
  // verifyAndAttachError('address_line2', address_line2, 'withSpaces', err)
  verifyAndAttachError('city', city, 'stringWithSpaces', err)
  verifyAndAttachError('state', state, 'stringWithSpaces', err)
  verifyAndAttachError('country', country, 'stringWithSpaces', err)
  verifyAndAttachError('zipcode', zipcode, 'numeric', err)
  // verifyAndAttachError('landmark', landmark, 'withSpaces', err)
  id && verifyAndAttachError('id', id, 'numeric', err)

  if(!_.isEmpty(err)) {
    return {err}
  }

  const formData = { id, address_line1, address_line2, city, state, country, zipcode, landmark }

  return { formData }
}

export const validatePeronalInfoForm = ({ first_name, last_name, email, phone_number }) => {
  let err = {}

  first_name = xssFilters.inHTMLData(trim(first_name))
  last_name = xssFilters.inHTMLData(trim(last_name))
  email = xssFilters.inHTMLData(trim(email))
  phone_number = xssFilters.inHTMLData(trim(phone_number))

  verifyAndAttachError('first_name', first_name, 'stringWithSpaces', err)
  verifyAndAttachError('last_name', last_name, 'stringWithSpaces', err)
  verifyAndAttachError('email', email, 'email', err)
  verifyAndAttachError('phone_number', phone_number, 'numeric', err)

  if(!_.isEmpty(err)) {
    return {err}
  }

  const formData = { first_name, last_name, email, phone_number }

  return { formData }
}

export const validateUserAddressId = ({ id }) => {
  let err = {}

  id = xssFilters.inHTMLData(trim(id))
  verifyAndAttachError('id', id, 'numeric', err)

  if(!_.isEmpty(err)) {
    return {err}
  }

  const formData = { id }

  return { formData }
}

export const validatePasswordChangeForm = ({ password, confirm_password }) => {
  let err = {}

  password = xssFilters.inHTMLData(trim(password))
  confirm_password = xssFilters.inHTMLData(trim(confirm_password))
  verifyAndAttachError('password', password, 'withSpaces', err)
  verifyAndAttachError('confirm_password', confirm_password, 'withSpaces', err)

  if(password !== confirm_password) {
    err.match = 'Passwords do not match'
  }

  if(!_.isEmpty(err)) {
    return {err}
  }

  const formData = { password, confirm_password }

  return { formData }
}

const verifyField = (value, type) => {
  switch(type) {
    case 'withSpaces':
      return !isEmpty(value)
    case 'stringWithSpaces':
      return !isEmpty(value) && matches(value, /^[a-z\s ]+$/i)
    case 'stringWithNoSpaces':
      return !isEmpty(value) && isAlpha(value)
    case 'email':
      return !isEmpty(value) && isEmail(value)
    case 'numeric':
      return !isEmpty(value) && isNumeric(value)
    default:
      return true
  }
}

const verifyAndAttachError = (id, value, type, err) => {
  if(!verifyField(value, type)) {
    err[id] = errorMessage
  }
}
