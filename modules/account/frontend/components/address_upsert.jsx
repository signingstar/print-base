import React from "react"
import Link from "react-router/Link"

const AddEditAddress = ({onChange, onSubmit, mode='add', pathname, address = {}}) => {
  let { address_line1, address_line2, city, state, country, zipcode, landmark } = address
  const title = mode === 'add' ? 'Add an Address' : 'Edit Address'

  return (
    <div className={'add-address fields ' +  mode}>
      <h3>{title}</h3>
      <div className="large-field">
        <label htmlFor="address_1">Address line 1</label>
        <input name="address_line1" value={address_line1} type="text" onChange={onChange} />
      </div>
      <div className="large-field">
        <label htmlFor="address_2">Address line 2</label>
        <input name="address_line2" value={address_line2} type="text" onChange={onChange} />
      </div>
      <div className="field">
        <label htmlFor="city">City</label>
        <input name="city" value={city} type="text" onChange={onChange} />
      </div>
      <div className="field">
        <label htmlFor="lastname">State</label>
        <input name="state" value={state} type="text" onChange={onChange} />
      </div>
      <div className="field">
        <label htmlFor="country">Country</label>
        <input name="country" readOnly="readonly" value={country} type="text" />
      </div>
      <div className="small-field">
        <label htmlFor="zipcode">PIN Code</label>
        <input name="zipcode" value={zipcode} type="text" onChange={onChange} />
      </div>
      <div className="large-field">
        <label htmlFor="landmark">Landmark</label>
        <input name="landmark" value={landmark} type="text" onChange={onChange} />
      </div>
      <div className='submit-button'>
        {mode === 'edit' ? <Link to='/account/profile/address' className='back'>Back</Link> : ''}
        <input type='button' value='Save Changes' onClick={onSubmit} />
      </div>
    </div>
  )
}

export default AddEditAddress
