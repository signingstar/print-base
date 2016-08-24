import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectSize, CATEGORY_SIZE } from "../actions";
import DropdownBox from "./dropdown_box";

class SizesItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];
  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  componentWillMount() {
    this.itemList = printableData(CATEGORY_SIZE);
  }

  visibleOptions(type: string) {
    return type ? printableDataWithFilter(CATEGORY_SIZE, {type}) : this.itemList;
  }

  render() {
    let { type, size } = this.props;

    if(!type) return null;

    let filteredList = this.visibleOptions(type);
    let placeholder = "Select Size..."

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = size === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={CATEGORY_SIZE}
      optionButtonNodes={optionButtonNodes}
      label='Print Size'
      selected={size}
      onClick={selectSize}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type,
    size: orderApp.selectionState.size,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(CATEGORY_SIZE) > -1
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
