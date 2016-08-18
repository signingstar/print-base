import * as React from "react";
import {connect} from "react-redux";

import MyProfile from "../components/profile";
import { selectTopNav } from "../actions";

class ProfileSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let {visible, onClick} = this.props;
    return <MyProfile visible={visible} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let visible = state.menuState.active === 'profile';

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
)(ProfileSetup);
