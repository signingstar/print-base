import React from "react"

const PasswordChange = ({onChange, onSubmit, data, message}) => {
  const {password, confirm_password} = data

  const hasError = !isEmpty(message)
  const messageClass = 'message ' + (message.success ? 'success' : 'error')
  const messageText = message.success ? 'Successfully Changed' : hasError ? 'Please enter the appropriate Value' : ''

  return (
    <div className='password-change fields'>
      <h2>Change Password</h2>
      <div className={messageClass}>{messageText}</div>
      <div className='form'>
        <div className="password-input field">
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="minimum 6 characters" value={password} onChange={onChange} type="password" />
        </div>
        <div className="password-confirm field">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input name="confirm_password" onChange={onChange} value={confirm_password} type="password" />
        </div>
        <div className='submit-button'>
          <input type='button' onClick={onSubmit} value='Save Changes' />
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

export default PasswordChange
