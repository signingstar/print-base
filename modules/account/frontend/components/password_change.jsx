import React from "react"

const PasswordChange = ({onChange, onSubmit, data, message}) => {
  const {password, confirm_password} = data

  const hasError = !isEmpty(message)
  const messageClass = 'message ' + (message.success ? 'success' : 'error')
  const messageText = message.success ? 'Successfully Changed' : hasError ? 'Please enter the appropriate Value' : ''

  return (
    <div className='password-change'>
      <h2>Change Password</h2>
      <div className={messageClass}>{messageText}</div>
      <div className='fields'>
        <form onSubmit={onSubmit}>
          <div className="password-input field required">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="minimum 6 characters"
              defaultValue={password}
              onChange={onChange}
              autoFocus={true}
              required
            />
          </div>
          <div className="password-confirm field required">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              onChange={onChange}
              defaultValue={confirm_password}
              required
            />
          </div>
          <div className='submit-button'>
            <input type='submit' value='Save Changes' />
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

export default PasswordChange
