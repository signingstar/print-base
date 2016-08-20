import * as React from "react";
import {connect} from "react-redux";

import SavedItems from "../components/saved_items";
import { selectTopNav } from "../actions";
import GlobalState from "../data_types/global_state";

class SubscriptionsSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { visible } = this.props;
    return <SavedItems visible={visible} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  let visible = state.menuState.active === 'savedItems';

  return {
    visible
  }
}

export default connect(
  mapStateToProps
)(SubscriptionsSetup);
