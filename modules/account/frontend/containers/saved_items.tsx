import * as React from "react";
import {connect} from "react-redux";

import SavedItems from "../components/saved_items";
import { selectTopNav } from "../actions";

class SubscriptionsSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let {visible, onClick} = this.props;
    return <SavedItems visible={visible} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let visible = state.menuState.active === 'savedItems';

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
