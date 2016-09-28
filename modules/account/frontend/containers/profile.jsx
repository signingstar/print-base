import React from "react"
import {connect} from "react-redux"
import { ajax } from "jquery"

import MyProfile from "../components/profile"
import { getAddresses, setAddressInProfile} from "../actions"

class ProfileContainer extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let { loadAddress, location: {pathname} } = this.props
    getAddresses({loadAddress, pathname})
  }

  render() {
    let { state, address={}, pathname } = this.props

    return <MyProfile state={state} address={address} pathname={pathname}/>
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    state: store.profileState.data,
    address: store.profileState.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAddress: (address) => {
      if(address.rowCount !== 0) {
        dispatch(setAddressInProfile(address))
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
