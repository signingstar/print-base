import React from "react"
import {connect} from "react-redux"

import Subscriptions from "../components/subscriptions"

class SubscriptionsContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <Subscriptions state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.subscriptionsState
  }
}

export default connect(
  mapStateToProps
)(SubscriptionsContainer)
