import * as React from "react";
import { connect } from "react-redux";

import Categories from "../components/categories";
import SubCategories from "../containers/sub_categories";
import { TYPE_CATEGORY } from "../actions";

class TypesItemBox extends React.Component<any, any> {
  render() {
    let { type } = this.props;
    let selectedLabel = type && type !== '' ? 'Print Type' : 'What would you like to print';

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <Categories label={selectedLabel} />
          <SubCategories label={selectedLabel} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type
  }
}

export default connect(
  mapStateToProps
)(TypesItemBox);
