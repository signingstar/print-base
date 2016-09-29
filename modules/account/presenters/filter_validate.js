import { validateAddressForm, validateUserDetailsForm} from "./form_validator"
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
      return filterAndValidateAccountInfo(bodyContent)
    case ACCOUNT_PASSWORD:
      return filterAndValidatePasswords(bodyContent)
    case USER_ADDRESS:
      return filterAndValidateAddressToUpdate(bodyContent)
  }
}

const filterAndValidateAddressToUpdate = (bodyContent, cb) => {
  const { id, address_line1, address_line2, city, state, zipcode, landmark } = bodyContent
  const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark, id })

  if(err) {
    return {err}
  }

  return { accountData: [id, address_line1, address_line2, city, state, zipcode, landmark] }
}

export const validateAddressId = (bodyContent, cb) => {
  const { id } = bodyContent
  return {addressData: [id]}
}

const filterAndValidateAccountInfo = (bodyContent, cb) => {
  const { first_name, last_name, email, phone_number } = bodyContent
  // const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })
  //
  // if(err) {
  //   return {err}
  // }

  return { accountData: [first_name, last_name, email, phone_number] }
}

const filterAndValidatePasswords = (bodyContent, cb) => {
  const { password, confirm_password } = bodyContent
  // const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })
  //
  // if(err) {
  //   return {err}
  // }

  return { accountData: [password] }
}
