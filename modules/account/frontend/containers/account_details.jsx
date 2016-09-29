import React from "react"
import {connect} from "react-redux"

import Component from "../components/account_details"
import { getAddresses, setAddressInProfile, getAccountData, setAccountData } from "../actions"

class AccountDetails extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let { loadAddress, loadAccountData, accountData, address, location: {pathname} } = this.props
    if(!accountData) {
      getAccountData({}, loadAccountData)
    }

    if(!address && pathname.indexOf('/address') === -1) {
      getAddresses({loadAddress, pathname})
    }
  }

  render() {
    let { accountData, address, pathname } = this.props

    return <Component pathname={pathname} />
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    accountData: store.profileState.data,
    address: store.profileState.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAddress: (address) => {
      if(address.rowCount !== 0) {
        dispatch(setAddressInProfile(address))
      }
    },
    loadAccountData: (data) => dispatch(setAccountData(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails)
