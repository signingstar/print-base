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
    <div className='personal-info'>
      <h2>Personal Information</h2>
      <div className={messageClass}>{messageText}</div>
      <div className='fields'>
        <form onSubmit={onSubmit}>
          <div className="medium-field required">
            <label htmlFor="first_name">First Name</label>
            <input
              name="first_name"
              value={first_name}
              type="text"
              onChange={onChange}
              className={message.first_name ? 'error' : undefined}
              maxLength={30}
              required={true}
            />
          </div>
          <div className="medium-field required">
            <label htmlFor="last_name">Last Name</label>
            <input
              name="last_name"
              value={last_name}
              type="text"
              onChange={onChange}
              className={message.last_name ? 'error' : undefined}
              maxLength={30}
              required={true}
            />
          </div>
          <div className="medium-field required">
            <label htmlFor="email">Email Id</label>
            <input
              name="email"
              value={email}
              type="email"
              onChange={onChange}
              className={message.email ? 'error' : undefined}
              required={true}
            />
          </div>
          <div className="medium-field required">
            <label htmlFor="phone_number">Mobile Number</label>
            <input
              name="phone_number"
              value={phone_number || ''}
              type="tel"
              onChange={onChange}
              className={message.phone_number ? 'error' : undefined}
              required={true}
            />
          </div>
          <div className='submit-button'>
            <input type='submit' value='Save Changes'/>
          </div>
        </form>
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
