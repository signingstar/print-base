import * as React from "react";
import { connect } from "react-redux";
import DropdownBox from "./dropdown_box";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectQuantity, CATEGORY_QUANTITY } from "../actions";

class QuantityItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  componentWillMount() {
    this.itemList = printableData(CATEGORY_QUANTITY);
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  visibleOptions(type: string, size: string, material: string) {
    if(!type) {
      return this.itemList;
    }

    return printableDataWithFilter(CATEGORY_QUANTITY, {type, size, material});
  }

  render() {
    let { storeState } = this.props;
    let { type, size, material, quantity } = storeState;

    if(!type) return null;

    let filteredList = this.visibleOptions(type, size, material);
    let placeholder = "Select Quantity ..."

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = quantity === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={CATEGORY_QUANTITY}
      optionButtonNodes={optionButtonNodes}
      label='Print Quantity'
      selected={quantity}
      onClick={selectQuantity}
      placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    storeState: orderApp.selectionState,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(CATEGORY_QUANTITY) > -1
  }
}

export default connect(
  mapStateToProps
)(QuantityItemBox);
