import React from "react"
import {connect} from "react-redux"

import Orders from "../components/orders"

class OrdersContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <Orders state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.ordersState
  }
}

export default connect(
  mapStateToProps
)(OrdersContainer)
