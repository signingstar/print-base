import validator from "validator"

const validateForm = (content) => {
  const { userid, fullname, password, telephone, confirmpassword } = content

  if(password !== confirmpassword) {
    return {err: {message:`Passwords do not Route`}}
  }

  const formData = { userid, fullname, password, telephone, confirmpassword }

  return { formData }
}

export default validateForm
