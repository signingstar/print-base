import React from "react"
import {connect} from "react-redux"

import Cart from "../components/cart"

class CartContainer extends React.Component{
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <Cart state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.cartState
  }
}

export default connect(
  mapStateToProps
)(CartContainer)
