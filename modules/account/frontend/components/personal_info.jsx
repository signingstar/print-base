import React from "react"

const PersonalInfo = ({onChange, onSubmit, data, message}) => {
  const {
    first_name = '',
    last_name = '',
    email = '',
    phone_number = ''
  } = data

  const hasError = !isEmpty(message)
  const messageClass = 'message ' + (message.success ? 'success' : 'error')
  const messageText = message.success ? 'Update Successful' : hasError ? 'Please enter the correct Value' : ''

  return (
    <div className='personal-info fields'>
      <h2>Personal Information</h2>
      <div className={messageClass}>{messageText}</div>
      <div className='form'>
        <div className="medium-field">
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            value={first_name}
            type="text"
            onChange={onChange}
            className={message.first_name ? 'error' : undefined}
            maxLength={30}
          />
        </div>
        <div className="medium-field">
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            value={last_name}
            type="text"
            onChange={onChange}
            className={message.last_name ? 'error' : undefined}
            maxLength={30}
          />
        </div>
        <div className="medium-field">
          <label htmlFor="email">Email Id</label>
          <input
            name="email"
            value={email}
            type="email"
            onChange={onChange}
            className={message.email ? 'error' : undefined}
          />
        </div>
        <div className="medium-field">
          <label htmlFor="phone_number">Mobile Number</label>
          <input
            name="phone_number"
            value={phone_number || ''}
            type="text"
            onChange={onChange}
            className={message.phone_number ? 'error' : undefined}
          />
        </div>
        <div className='submit-button'>
          <input type='button' value='Save Changes' onClick={onSubmit}/>
        </div>
      </div>
    </div>
  )
}

const isEmpty = (obj) => {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false
  }

  return true
}

export default PersonalInfo
