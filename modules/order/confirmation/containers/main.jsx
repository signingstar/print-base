import React from "react";
import { connect } from "react-redux";

import ConfirmationItems from "../components/contents";
import { resetAll } from "../../frontend/actions";
import ContentItem from "../components/content_item";

const mapStateToProps = (orderApp, ownProps) => {
  let { files } = orderApp.selectionState;

  let { type, isComplete, map } = ownProps.fieldsLabel;

  let itemNodes = [];

  var mapIter = map.keys();
  for (var v of mapIter) {
    itemNodes.push(<ContentItem label={map.get(v).label} value={map.get(v).value} key={v} />);
  }

  files = files || [];

  return { files, isComplete, itemNodes }
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
