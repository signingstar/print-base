import * as React from "react";
import {connect} from "react-redux";

import Subscriptions from "../components/subscriptions";
import GlobalState from "../data_types/global_state";

class SubscriptionsContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <Subscriptions state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.subscriptionsState
  }
}

export default connect(
  mapStateToProps
)(SubscriptionsContainer);
