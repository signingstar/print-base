import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll } from "../actions";
import PrintData from "../presenter";

const mapStateToProps = (printApp: any, ownProps: any) => {
  let state = printApp.selectionState;

  let type =  state.type ? PrintData['type'][state.type].label : undefined;
  let size = state.size ? PrintData['size'][state.size].label : undefined;
  let material =  state.material ? PrintData['material'][state.material].label : undefined;
  let quantity =  state.quantity ? PrintData['quantity'][state.quantity].label : undefined;

  return {
    state: {type, size, material, quantity}
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onReset: () => {
      dispatch(resetAll())
    }
  }
}

const ConfirmationBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationItems)

export default ConfirmationBox;
