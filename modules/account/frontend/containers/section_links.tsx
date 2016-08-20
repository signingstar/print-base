import * as React from "react";
import {connect} from "react-redux";

import SectionLinks from "../components/section_links";
import GlobalState from "../data_types/global_state";

class SectionLinkContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    return <SectionLinks />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  let {active} = state.menuState;

  return {
    active
  }
}

export default connect(
  mapStateToProps
)(SectionLinkContainer);
