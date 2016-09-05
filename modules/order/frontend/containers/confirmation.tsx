import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll, TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "../actions";
import { fetchLabelForCategoryAndId } from "../presenter";

const mapStateToProps = (orderApp: any, ownProps: any) => {
  let { quantity, files } = orderApp.selectionState;
  let { type } = orderApp.typeState;

  type =  fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
  let { size, material, coat } = ownProps.fieldsLabel;
  // material =  fetchLabelForCategoryAndId(TYPE_SURFACE, material);
  // coat =  fetchLabelForCategoryAndId(TYPE_COAT, coat);
  quantity =  fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);
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

const Confirmation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationItems);

export default Confirmation;
