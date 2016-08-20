import * as React from "react";
import {connect} from "react-redux";

import Orders from "../components/orders";
import { selectTopNav } from "../actions";
import GlobalState from "../data_types/global_state";

class OrdersSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { visible } = this.props;

    return <Orders visible={visible} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  let visible = state.menuState.active === 'orders';

  return {
    visible
  }
}

export default connect(
  mapStateToProps
)(OrdersSetup);
