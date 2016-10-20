import React, {Component} from "react"
import { ajax } from "jquery"
import { connect } from "react-redux"
import DOMPurify from "dompurify"

import InsertAddress from "../components/address_upsert"
import SavedAddress from "../containers/saved_address"
import { setError, setSuccess, addAddress, addAddressInProfile, deleteAddress, updateDeletedAddress, clearAllErrors } from "../actions"

const initialState = {
  address_line1: '',
  address_line2: '',
  city: '',
  state: '',
  landmark: '',
  country: 'India',
  zipcode: ''
}

class Address extends Component {
  constructor() {
    super();

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.onAddAddress = this.onAddAddress.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: DOMPurify.sanitize(value)})
  }

  onAddAddress(e) {
    e.preventDefault()
    const { onAdd } = this.props
    let address = JSON.parse(JSON.stringify(this.state))
    onAdd(address, () => this.setState(initialState))
  }

  componentWillUnmount() {
    const { clearErrors } = this.props
    clearErrors()
  }

  render() {
    const {addresses = [], onAdd, onDelete, pathname, message} = this.props

    return (
      <div className='address-box'>
        <InsertAddress
          onChange={this.handleChange}
          address={this.state}
          onSubmit={this.onAddAddress}
          message={message}
        />
        <SavedAddress pathname={pathname} />
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const { message } = store.error

  return {
    message: message ?  (message.address ?  message.address : {}) : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAdd: (data, resetFields) => {
      dispatch(clearAllErrors())
      addAddress(data, ({err, data}) => {
        if(err) {
          dispatch(setError({address:err}))
        } else {
          dispatch(addAddressInProfile(data))
          dispatch(setSuccess({address:{success: true}}))
          resetFields()
        }
      })
    },
    clearErrors: () => dispatch(clearAllErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Address)
