import * as React from "react";
import {connect} from "react-redux";

import MyProfile from "../components/profile";
import GlobalState from "../data_types/global_state";

class ProfileSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('profile component');
  }
  render() {
    let { state } = this.props;

    return <MyProfile state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.profileState
  }
}

export default connect(
  mapStateToProps
)(ProfileSetup);
