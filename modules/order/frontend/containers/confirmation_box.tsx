import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll, CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY } from "../actions";
import { fetchLabelForCategoryAndId } from "../presenter";
import { StateObject } from "../data_types/data_format";


const mapStateToProps = (printApp: any, ownProps: any) => {
  let state: StateObject = printApp.selectionState;

  let {type, size, material, quantity} = state;

  let typeVal =  type ? fetchLabelForCategoryAndId(CATEGORY_TYPE, type) : undefined;
  let sizeVal = size ? fetchLabelForCategoryAndId(CATEGORY_SIZE, size) : undefined;
  let materialVal =  material ? fetchLabelForCategoryAndId(CATEGORY_MATERIAL, material) : undefined;
  let quantityVal =  quantity ? fetchLabelForCategoryAndId(CATEGORY_QUANTITY, quantity) : undefined;

  return {typeVal, sizeVal, materialVal, quantityVal}
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
