import * as React from "react";
import { connect } from "react-redux";

import { selectSize, TYPE_SIZE } from "../actions";
import DropdownContainer from "../containers/dropdown";

class SizesItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, size, itemList } = this.props;

    if(!type) return null;

    let placeholder = "Select Size..."

    let optionButtonNodes = itemList.map((entry) => {
      let selected = size === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownContainer
      category={TYPE_SIZE}
      optionButtonNodes={optionButtonNodes}
      label='Print Size'
      selected={size}
      onClick={selectSize}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    itemList: ownProps.sizeList,
    size: orderApp.selectionState.size,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_SIZE) > -1
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
