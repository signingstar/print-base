import React from "react"
import Link from "react-router/Link"

const AddEditAddress = ({onChange, onSubmit, mode='add', pathname, address = {}, message}) => {
  let { address_line1, address_line2, city, state, country, zipcode, landmark } = address
  const title = mode === 'add' ? 'Add an Address' : 'Edit Address'

  const hasError = !isEmpty(message)
  const messageClass = 'message ' + (message.success ? 'success' : 'error')
  const messageText = message.success ? 'Update Successful' : hasError ? 'Please enter the correct Value' : ''

  return (
    <div className={'add-address ' +  mode}>
      <h2>{title}</h2>
      <div className={messageClass}>{messageText}</div>
      <div className='fields'>
        <form onSubmit={onSubmit}>
          <div className="large-field required">
            <label htmlFor="address_1">Address line 1</label>
            <input
              name="address_line1"
              value={address_line1}
              type="text"
              autoFocus
              onChange={onChange}
              className={message.address_line1 ? 'error' : undefined}
              required
            />
          </div>
          <div className="large-field">
            <label htmlFor="address_2">Address line 2</label>
            <input
              name="address_line2"
              value={address_line2}
              type="text"
              onChange={onChange}
              className={message.address_line2 ? 'error' : undefined}
            />
          </div>
          <div className="field required">
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={city}
              type="text"
              onChange={onChange}
              className={message.city ? 'error' : undefined}
              required
            />
          </div>
          <div className="field required">
            <label htmlFor="lastname">State</label>
            <input
              name="state"
              value={state}
              type="text"
              onChange={onChange}
              className={message.state ? 'error' : undefined}
              required
            />
          </div>
          <div className="field required">
            <label htmlFor="country">Country</label>
            <input
              name="country"
              readOnly="readonly"
              value={country}
              type="text"
              className={message.country ? 'error' : undefined}
              required
            />
          </div>
          <div className="small-field required">
            <label htmlFor="zipcode">PIN Code</label>
            <input
              name="zipcode"
              value={zipcode}
              type="number"
              onChange={onChange}
              className={message.zipcode ? 'error' : undefined}
              required
            />
          </div>
          <div className="large-field">
            <label htmlFor="landmark">Landmark</label>
            <input
              name="landmark"
              value={landmark}
              type="text"
              onChange={onChange}
              className={message.landmark ? 'error' : undefined}
            />
          </div>
          <div className='submit-button'>
            {mode === 'edit' ? <Link to='/account/profile/address' className='back'>Back</Link> : ''}
            <input
              type='submit'
              value='Save Changes'
            />
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

export default AddEditAddress
