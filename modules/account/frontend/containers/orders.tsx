import * as React from "react";
import {connect} from "react-redux";

import Orders from "../components/orders";
import { selectTopNav } from "../actions";

class OrdersSetup extends React.Component<any, any>{
  constructor() {
    super();
  }

  render() {
    let {visible, onClick} = this.props;

    return <Orders visible={visible} />
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  let visible = state.menuState.active === 'orders';

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
)(OrdersSetup);
