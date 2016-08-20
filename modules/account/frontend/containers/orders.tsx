import * as React from "react";
import {connect} from "react-redux";

import Orders from "../components/orders";
import GlobalState from "../data_types/global_state";

class OrdersContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <Orders state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.ordersState
  }
}

export default connect(
  mapStateToProps
)(OrdersContainer);
