import React from "react"
import {connect} from "react-redux"

import Address from "../components/address"

class AddressContainer extends React.Component{
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <Address state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.addressState
  }
}

export default connect(
  mapStateToProps
)(AddressContainer)
