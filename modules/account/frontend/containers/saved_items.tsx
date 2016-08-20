import * as React from "react";
import {connect} from "react-redux";

import SavedItems from "../components/saved_items";
import GlobalState from "../data_types/global_state";

class SavedItemsContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <SavedItems state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.savedItemsState
  }
}

export default connect(
  mapStateToProps
)(SavedItemsContainer);
