import * as React from "react";
import {connect} from "react-redux";

import Payment from "../components/payment";
import GlobalState from "../data_types/global_state";

class PaymentContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <Payment state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.paymentState
  }
}

export default connect(
  mapStateToProps
)(PaymentContainer);
