import React, {Component} from "react"
import { ajax } from "jquery"
import { connect } from "react-redux"

import InsertAddress from "../components/address_upsert"
import SavedAddress from "../components/saved_address"
import { addAddress, addAddressInProfile, deleteAddress, updateDeletedAddress } from "../actions"

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
    this.setState({[name]: value})
  }

  onAddAddress() {
    const { onAdd } = this.props
    let address = JSON.parse(JSON.stringify(this.state))
    this.setState(initialState)
    onAdd(address)
  }

  render() {
    const {addresses = [], onAdd, onDelete, pathname} = this.props

    const addressList = addresses.map(address => <SavedAddress
      id={address.id}
      key={address.id}
      address={address}
      onDelete={onDelete}
      pathname={pathname} />
    )

    return (
      <div className='address-box'>
        <InsertAddress
          onChange={this.handleChange}
          address={this.state}
          onSubmit={this.onAddAddress}
        />
        <div className='saved-addresses'>
          {addressList.length === 1 ? <h3>Saved Address</h3> : addressList.length > 1 ? <h3>Saved Addresses</h3> : ''}
          {addressList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    addresses: store.profileState.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (e) => {
      const addressId = e.target.id
      deleteAddress(addressId, () => dispatch(updateDeletedAddress(addressId)))
    },
    onAdd: (data) => {
      addAddress(data, (finalData) => {
        dispatch(addAddressInProfile(finalData))
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Address)
