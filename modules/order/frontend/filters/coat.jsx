import React from "react";
import { connect } from "react-redux";

import { selectCoat, COAT } from "../actions/index";
import DropdownBox from "../containers/dropdown";

class CoatingBox extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { coat, itemList } = this.props;

    let placeholder = "Select Coating ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = coat === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={COAT}
      optionButtonNodes={optionButtonNodes}
      label='Print Coating'
      selected={coat}
      onClick={selectCoat}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    itemList: ownProps.coatList,
    coat: orderApp.selectionState.coat,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(COAT) > -1
  }
}

export default connect(
  mapStateToProps
)(CoatingBox);
