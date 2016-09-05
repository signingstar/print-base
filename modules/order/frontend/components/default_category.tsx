import * as React from "react";
import { connect } from "react-redux";

import { fetchLabelForCategoryAndId } from "../presenter";
import { TYPE_CATEGORY } from "../actions";

class DefaultCategory extends React.Component<any, any> {
  render() {
    let {type} = this.props;
    return <div className='print-type'><h1>{type} printing</h1></div>
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: ownProps.type
  }
}

export default connect(
  mapStateToProps
)(DefaultCategory);
