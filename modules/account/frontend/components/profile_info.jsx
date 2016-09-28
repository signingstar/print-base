import React from "react"

const ProfileInfo = ({onChange, onSubmit, data}) => {
  const { first_name, last_name, email, phone_number } = data

  return (
    <div className='personal-info fields'>
      <h3>Personal Information</h3>
      <div className="medium-field">
        <label htmlFor="first_name">First Name</label>
        <input name="first_name" value={first_name} type="text" onChange={onChange} />
      </div>
      <div className="medium-field">
        <label htmlFor="last_name">Last Name</label>
        <input name="last_name" value={last_name} type="text" onChange={onChange} />
      </div>
      <div className="medium-field">
        <label htmlFor="email">Email Id</label>
        <input name="email" value={email} type="email" onChange={onChange} />
      </div>
      <div className="medium-field">
        <label htmlFor="phone_number">Mobile Number</label>
        <input name="phone_number" value={phone_number || ''} type="text" onChange={onChange} />
      </div>
      <div className='submit-button'>
        <input type='button' value='Save Changes' onClick={onSubmit}/>
      </div>
    </div>
  )
}

export default ProfileInfo
