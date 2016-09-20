import React from "react"
import {connect} from "react-redux"

import MyProfile from "../components/profile"

class ProfileContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <MyProfile state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.profileState
  }
}

export default connect(
  mapStateToProps
)(ProfileContainer)
