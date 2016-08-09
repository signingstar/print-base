import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll } from "../actions";
import { fetchLabelForCategoryAndId } from "../presenter";
import { StateObject } from "../data_types/data_format";

const mapStateToProps = (printApp: any, ownProps: any) => {
  let state: StateObject = printApp.selectionState;

  let {type, size, material, quantity} = state;

  let typeVal =  type ? fetchLabelForCategoryAndId('type', type) : undefined;
  let sizeVal = size ? fetchLabelForCategoryAndId('size', size) : undefined;
  let materialVal =  material ? fetchLabelForCategoryAndId('material', material) : undefined;
  let quantityVal =  quantity ? fetchLabelForCategoryAndId('quantity', quantity) : undefined;

  return {
    state: {typeVal, sizeVal, materialVal, quantityVal}
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
