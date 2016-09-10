import React from "react";
import { connect } from "react-redux";

import ButtonComponent from "../components/button";

class Button extends React.Component {
  render() {
    let {files, onSubmit} = this.props;

    return <ButtonComponent onSubmit={()=> onSubmit(files)} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  let {fieldsMap} = ownProps;

  return {
    category: orderApp.categoryState.subCategory,
    files: orderApp.selectionState.files,
    onSubmit: ownProps.onSubmit
  }
}

export default connect(mapStateToProps)(Button);
