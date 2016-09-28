import { validateAddressForm, validateUserDetailsForm} from "./form_validator"

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

export const filterAndValidateAddressToUpdate = (bodyContent, cb) => {
  const { id, address_line1, address_line2, city, state, zipcode, landmark } = bodyContent
  const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark, id })

  if(err) {
    return {err}
  }

  return { addressData: [address_line1, address_line2, city, state, zipcode, landmark, id] }
}

export const validateAddressId = (bodyContent, cb) => {
  const { id } = bodyContent
  return {addressData: [id]}
}

export const filterAndValidateProfileFields = (bodyContent, cb) => {
  const { first_name, last_name, email, phone_number } = bodyContent
  // const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })
  //
  // if(err) {
  //   return {err}
  // }

  return { userData: [first_name, last_name, email, phone_number] }
}

export const filterAndValidatePasswords = (bodyContent, cb) => {
  const { password, confirm_password } = bodyContent
  // const {err, formData} = validateAddressForm({ address_line1, address_line2, city, state, zipcode, landmark })
  //
  // if(err) {
  //   return {err}
  // }

  return { userData: [password] }
}
