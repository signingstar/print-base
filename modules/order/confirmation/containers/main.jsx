import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import ConfirmationContent from "../components/contents";
import { resetAll } from "../../frontend/actions/index";
import ContentItem from "../components/content_item";

const uploadFile = (files) => {
  var data = new FormData();

  data.append('photo', files[0]);

  $.ajax({
    url: '/upload',
    processData: false,
    contentType: false,
    type: 'POST',
    data: data,
    success: function(data) {
      console.log("File successfully uploaded");
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }
  });
};

const fieldsKeyMap = (fieldsMap) => {
  return fieldsMap.keys();
}

const getItemNodes = (fieldsMap, fieldsKeyMap) => {
  let itemNodes = [];

  for (var key of fieldsKeyMap) {
    itemNodes.push(
      <ContentItem
        label={fieldsMap.get(key).label}
        value={fieldsMap.get(key).value}
        key={key} />
    );
  }

  return itemNodes;
}

const mapStateToProps = (orderApp, ownProps) => {
  let { files = [] } = orderApp.selectionState;
  let { category, isComplete, fieldsMap } = ownProps.fieldsLabel;

  const filesNode = files.map(file =>
    <li className='file-name' key={file.name}>{file.name}</li>
  );

  let fieldsKey = fieldsKeyMap(fieldsMap);
  let itemNodes = getItemNodes(fieldsMap, fieldsKey);

  return { fieldsMap, filesNode, isComplete, itemNodes }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onReset: () => {
      dispatch(resetAll())
    },
    onSubmit: (files) => {
      uploadFile(files);
    }
  }
};

const Confirmation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationContent);

export default Confirmation;
