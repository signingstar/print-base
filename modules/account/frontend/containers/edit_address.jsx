import React from "react"
import { connect } from "react-redux"
import DOMPurify from "dompurify"

import UpdateAddress from "../components/address_upsert"
import { setError, setSuccess, updateAddress, updateAddressInProfile, clearAllErrors } from "../actions"

class EditAddress extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    const { addresses, location: {state: {id}} } = this.props
    const addressFromList = addresses.find(entry => entry.id === id)

    this.setState(JSON.parse(JSON.stringify(addressFromList)))
  }

  componentWillUnmount() {
    const { clearErrors } = this.props
    clearErrors()
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: DOMPurify.sanitize(value)})
  }

  render() {
    const { onChange, mode, onUpdate, location: {state: {id}}, message } = this.props

    return (
      <div className='address-box'>
        <UpdateAddress
          id={id}
          address={this.state}
          mode={mode}
          onChange={this.handleChange}
          onSubmit={()=> onUpdate(this.state)}
          message={message}
        />
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    addresses: store.profileState.address,
    mode: 'edit',
    message: store.error.message || {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (data) => {
      dispatch(updateAddressInProfile(data))
      dispatch(clearAllErrors())
      updateAddress(data, ({err}) => {
        if(err) {
          dispatch(setError(err))
        } else {
          dispatch(setSuccess())
        }
      })
    },
    clearErrors: () => dispatch(clearAllErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditAddress)
