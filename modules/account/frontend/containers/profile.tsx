import * as React from "react";
import {connect} from "react-redux";

import MyProfile from "../components/profile";
import { selectTopNav } from "../actions";
import GlobalState from "../data_types/global_state";

class ProfileSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { visible } = this.props;

    return <MyProfile visible={visible} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  let visible = state.menuState.active === 'profile';

  return {
    visible,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(ProfileSetup);
