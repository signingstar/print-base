import formValidator from "./form_validator"

const filterAndValidateFields = (bodyContent, cb) => {
  const { userid, username, telephone, query_type, query } = bodyContent
  // const {err, formData} = formValidator({ userid, username, telephone, query_type, query })

  // if(err) {
  //   return {err}
  // }

  const name = username.split(" ")
  const last_name = name.pop()
  const first_name = name.join(' ')

  return { queryData: [first_name, last_name, userid, telephone, query_type, query] }
}

export default filterAndValidateFields
