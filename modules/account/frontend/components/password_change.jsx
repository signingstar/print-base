import React from "react"

const PasswordChange = () => {
  return (
    <div className='password-change fields'>
      <h3>Change Password</h3>
      <div className="password-input field">
        <label htmlFor="password">Password</label>
        <input name="password" placeholder="minimum 8 characters" type="password" />
      </div>
      <div className="password-confirm field">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input name="confirmpassword" required="" type="password" />
      </div>
      <div className='submit-button'>
        <input type='button' value='Save Changes' />
      </div>
    </div>
  )
}

export default PasswordChange
