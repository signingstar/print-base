import * as React from "react";
import {connect} from "react-redux";

import Address from "../components/address";
import GlobalState from "../data_types/global_state";

class AddressContainer extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let { state } = this.props;

    return <Address state={state} />
  }
}

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    state: state.addressState
  }
}

export default connect(
  mapStateToProps
)(AddressContainer);
