import { connect } from "react-redux";

import ConfirmationItems from "../components/confirmation_items";
import { resetAll } from "../../frontend/actions";

const mapStateToProps = (orderApp, ownProps) => {
  let { files } = orderApp.selectionState;

  let { type, size, material, coat, quantity } = ownProps.fieldsLabel;

  files = files || [];
  let isComplete = type && size && material && coat && quantity;

  return { files, isComplete }
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
