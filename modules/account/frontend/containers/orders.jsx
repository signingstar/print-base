import React from "react"
import {connect} from "react-redux"

import Orders from "../components/orders"

class OrdersContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props
    console.log(`state:${JSON.stringify(state)}`)

    return <Orders state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(`state:${JSON.stringify(state)}`)
  return {
    state: state.ordersState
  }
}

export default connect(
  mapStateToProps
)(OrdersContainer)
