import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll, CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY } from "../actions";
import { fetchLabelForCategoryAndId } from "../presenter";
import { StateObject } from "../data_types/data_format";

const mapStateToProps = (printApp: any, ownProps: any) => {
  let { type, size, material, quantity, files } = printApp.selectionState;

  type =  fetchLabelForCategoryAndId(CATEGORY_TYPE, type);
  size = fetchLabelForCategoryAndId(CATEGORY_SIZE, size);
  material =  fetchLabelForCategoryAndId(CATEGORY_MATERIAL, material);
  quantity =  fetchLabelForCategoryAndId(CATEGORY_QUANTITY, quantity);
  files = files || [];

  return { type, size, material, quantity, files }
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
