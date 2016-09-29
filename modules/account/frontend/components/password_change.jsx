import React from "react"

const PasswordChange = ({onChange, onSubmit, data}) => {
  const {password, confirm_password, message} = data

  return (
    <div className='password-change fields'>
      <h3>Change Password</h3>
      <div className='message'>{message}</div>
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

export default PasswordChange
