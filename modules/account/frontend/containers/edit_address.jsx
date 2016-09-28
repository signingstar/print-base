import React from "react"
import { connect } from "react-redux"

import UpdateAddress from "../components/address_upsert"
import { updateAddress, updateAddressInProfile } from "../actions"

class EditAddress extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  componentWillMount() {
    const { addresses, location: {state: {id}} } = this.props
    const addressFromList = addresses.find(entry => entry.id === id)

    this.setState(JSON.parse(JSON.stringify(addressFromList)))
  }

  render() {
    const { onChange, mode, onUpdate, location: {state: {id}} } = this.props
    return (
      <div className='address-box'>
        <UpdateAddress id={id} address={this.state} mode={mode} onChange={this.handleChange} onSubmit={()=> onUpdate(this.state)} />
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    addresses: store.profileState.address,
    mode: 'edit'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (data) => updateAddress(data, () => dispatch(updateAddressInProfile(data)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditAddress)
