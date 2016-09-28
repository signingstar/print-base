import validator from "validator"

export const validateAddressForm = (content = {}) => {
  const { address_line1, address_line2, city, state, zipcode, landmark } = content

  const formData = { address_line1, address_line2, city, state, zipcode, landmark }

  return { formData }
}

export const validateUserDetailsForm = (content = {}) => {
  const { address_line1, address_line2, city, state, zipcode, landmark } = content

  const formData = { address_line1, address_line2, city, state, zipcode, landmark }

  return { formData }
}
