import React from "react";
import { connect } from "react-redux";

import { fetchLabelForCategoryAndId } from "../presenter";
import { TYPE_CATEGORY } from "../actions";

class DefaultCategory extends React.Component {
  render() {
    let {type} = this.props;
    return <div className='print-type'><h1>{type} printing</h1></div>
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: ownProps.type
  }
}

export default connect(
  mapStateToProps
)(DefaultCategory);
