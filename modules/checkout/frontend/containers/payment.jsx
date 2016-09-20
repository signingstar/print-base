import React from "react"
import {connect} from "react-redux"

import Payment from "../components/payment"

class PaymentContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <Payment state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.paymentState
  }
}

export default connect(
  mapStateToProps
)(PaymentContainer)
