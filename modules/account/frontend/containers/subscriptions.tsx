import * as React from "react";
import {connect} from "react-redux";

import Subscriptions from "../components/subscriptions";
import { selectTopNav } from "../actions";
import GlobalState from "../data_types/global_state";

class SubscriptionsSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { visible } = this.props;
    return <Subscriptions visible={visible} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let visible = state.menuState.active === 'subscriptions';

  return {
    visible
  }
}

export default connect(
  mapStateToProps
)(SubscriptionsSetup);
