import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll, CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY } from "../actions";
import { fetchLabelForCategoryAndId } from "../presenter";

const mapStateToProps = (orderApp: any, ownProps: any) => {
  let { size, material, coat, quantity, files } = orderApp.selectionState;
  let { type } = orderApp.typeState;

  type =  fetchLabelForCategoryAndId(CATEGORY_TYPE, type);
  size = fetchLabelForCategoryAndId(CATEGORY_SIZE, size);
  material =  fetchLabelForCategoryAndId(CATEGORY_SURFACE, material);
  coat =  fetchLabelForCategoryAndId(CATEGORY_COAT, coat);
  quantity =  fetchLabelForCategoryAndId(CATEGORY_QUANTITY, quantity);
  files = files || [];
  let isComplete = type && size && material && coat && quantity && files;

  return { type, size, material, coat, quantity, files, isComplete }
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
)(ConfirmationItems);

export default ConfirmationBox;
