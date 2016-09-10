import React from "react";
import { connect } from "react-redux";

import { selectSize, SIZE } from "../actions/index";
import DropdownContainer from "../containers/dropdown";

class SizesItemBox extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { size, itemList } = this.props;

    let placeholder = "Select Size..."

    let optionButtonNodes = itemList.map((entry) => {
      let selected = size === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownContainer
      category={SIZE}
      optionButtonNodes={optionButtonNodes}
      label='Print Size'
      selected={size}
      onClick={selectSize}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    itemList: ownProps.sizeList,
    size: orderApp.selectionState.size,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(SIZE) > -1
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
