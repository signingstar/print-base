import { validateAddressForm, validatePeronalInfoForm, validateUserAddressId, validatePasswordChangeForm } from "./form_validator"
import { ACCOUNT_INFO, ACCOUNT_PASSWORD, USER_ADDRESS} from "../modules"

export const filterAndValidateFields = (bodyContent, cb) => {
  const { address_line1, address_line2, city, state, zipcode, landmark } = bodyContent
  const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })

  if(err) {
    return {err}
  }

  return { addressData: [address_line1, address_line2, city, state, zipcode, landmark] }
}

export const filterAndValidateAddress = (bodyContent, cb) => {
  const { address_line1, address_line2, city, state, zipcode, landmark } = bodyContent
  const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })

  if(err) {
    return {err}
  }

  return { addressData: [address_line1, address_line2, city, state, zipcode, landmark] }
}


export const filterAndValidateAccountDetails = (type, bodyContent) => {
  switch(type) {
    case ACCOUNT_INFO:
      return filterAndValidatePersonalInfo(bodyContent)
    case ACCOUNT_PASSWORD:
      return filterAndValidatePasswords(bodyContent)
    case USER_ADDRESS:
      return filterAndValidateAddressToUpdate(bodyContent)
  }
}

const filterAndValidateAddressToUpdate = (bodyContent, cb) => {
  const { id, address_line1, address_line2, city, state, country, zipcode, landmark } = bodyContent
  const {err, formData} = validateAddressForm({ id, address_line1, address_line2, city, state, country, zipcode, landmark })

  if(err) {
    return {err}
  }

  return { accountData: [id, address_line1, address_line2, city, state, country, zipcode, landmark] }
}

export const validateAddressId = (bodyContent, cb) => {
  const { id } = bodyContent

  const {err, formData} = validateUserAddressId({ id })

  if(err) {
    return {err}
  }

  return {formData: [id]}
}

const filterAndValidatePersonalInfo = (bodyContent, cb) => {
  const { first_name, last_name, email, phone_number } = bodyContent
  const {err, formData} = validatePeronalInfoForm({ first_name, last_name, email, phone_number })

  if(err) {
    return {err}
  }

  return { accountData: [first_name, last_name, email, phone_number] }
}

const filterAndValidatePasswords = (bodyContent, cb) => {
  const { password, confirm_password } = bodyContent
  const {err, formData} = validatePasswordChangeForm({ password, confirm_password })

  if(err) {
    return {err}
  }

  return { accountData: [password] }
}
