import * as React from "react";
import {connect} from "react-redux";

import Cart from "../components/cart";
import GlobalState from "../data_types/global_state";

class CartContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <Cart state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.cartState
  }
}

export default connect(
  mapStateToProps
)(CartContainer);
