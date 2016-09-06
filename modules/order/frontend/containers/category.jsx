import React from "react";
import { connect } from "react-redux";

import Categories from "../components/categories";
import { TYPE_CATEGORY, selectPrimaryType } from "../actions";

class TypesItemBox extends React.Component {
  render() {
    let { type, primaryType, setType } = this.props;
    let selectedLabel = primaryType && primaryType !== '' ? 'Print Type' : 'What would you like to print';

    return (
      <div className='main-section-body'>
        <div className='left-panel category'>
          <Categories label={selectedLabel} onselect={setType} type={primaryType}  />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: orderApp.typeState.type,
    primaryType: orderApp.typeState.primaryType
  }
}

export default connect(
  mapStateToProps
)(TypesItemBox);
