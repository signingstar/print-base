import React from "react"
import Link from "react-router-dom/Link"

const SavedAddress = ({onDelete, address, pathname}) => {
  const {id, address_line1, address_line2, city, state, country, zipcode, landmark} = address

  return (
    <div className='saved-address'>
      <div>{address_line1}</div>
      <div>{address_line2}</div>
      <div>{city}, {state}</div>
      <div>{country} - {zipcode}</div>
      <div>{landmark}</div>
      <div className='play-address'>
        <span id={id} onClick={onDelete} className='delete'>Delete</span>
        <Link to={{
          pathname: `${pathname}/edit`,
          state: {id: +id}
        }} className='edit'>Edit Address</Link>
      </div>
    </div>
  )
}

export default SavedAddress
