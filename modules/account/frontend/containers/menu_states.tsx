import * as React from "react";
import {connect} from "react-redux";

import SectionHeader from "../components/section_header";
import { selectTopNav } from "../actions";

class MenuStates extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let {active, onClick} = this.props;
    return <SectionHeader active={active} onClick={onClick} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let {active} = state.menuState;
  console.log(`menuState:${JSON.stringify(state.menuState)}`);
  
  return {
    active
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
)(MenuStates);
