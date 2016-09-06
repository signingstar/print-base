import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll, TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "../actions";

const mapStateToProps = (orderApp, ownProps) => {
  let { files } = orderApp.selectionState;

  let { type, size, material, coat, quantity } = ownProps.fieldsLabel;
  // material =  fetchLabelForCategoryAndId(TYPE_SURFACE, material);
  // coat =  fetchLabelForCategoryAndId(TYPE_COAT, coat);
  files = files || [];
  let isComplete = type && size && material && coat && quantity && files;

  return { type, size, material, coat, quantity, files, isComplete }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
