import React from "react"
import { connect } from "react-redux"

import Component from "../components/saved_address"
import { setError, setSuccess, deleteAddress, updateDeletedAddress, clearAllErrors } from "../actions"

class SavedAddress extends React.Component {

  componentWillUnmount() {
    const { clearErrors } = this.props
    clearErrors()
  }

  render() {
    const {addresses = [], onDelete, pathname, message} = this.props

    const hasError = !isEmpty(message)
    const messageClass = 'message ' + (message.success ? 'success' : 'error')
    const messageText = message.success ? 'Successfully Deleted' : hasError ? 'Address could not be deleted' : ''

    const addressList = addresses.map(address => <Component
      id={address.id}
      key={address.id}
      address={address}
      onDelete={onDelete}
      pathname={pathname} />
    )

    return (
      <div className='saved-addresses'>
        {addressList.length === 1 ?
          <h2>Saved Address</h2> :
            addressList.length > 1 ? <h3>Saved Addresses</h3> : <h3>No Saved Address</h3>}
        <div className={messageClass}>{messageText}</div>
        {addressList}
      </div>
    )
  }
}

const isEmpty = (obj) => {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false
  }

  return true
}

const mapStateToProps = (store, ownProps) => {
  const { message } = store.error

  return {
    addresses: store.profileState.address,
    message: message ?  (message.deleteMessage ?  message.deleteMessage : {}) : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (e) => {
      const addressId = e.target.id
      dispatch(clearAllErrors())
      deleteAddress(addressId, ({err}) => {
        if(err) {
          dispatch(setError({deleteMessage: err}))
        } else {
          dispatch(updateDeletedAddress(addressId))
          dispatch(setSuccess({deleteMessage: {success: true}}))
        }
      })
    },
    clearErrors: () => dispatch(clearAllErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedAddress)
