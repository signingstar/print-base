import * as React from "react";
import {connect} from "react-redux";

import Subscriptions from "../components/subscriptions";
import { selectTopNav } from "../actions";

class SubscriptionsSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let {visible, onClick} = this.props;
    return <Subscriptions visible={visible} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let visible = state.menuState.active === 'subscriptions';

  return {
    visible
  }
}

const mapDispatchToProps = (dispatch: (e:any)=>()=>void, ownProps: any) => {
  return {
    onClick: (val: any) => {
      dispatch(selectTopNav(val))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionsSetup);
