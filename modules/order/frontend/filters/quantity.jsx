import React from "react";
import { connect } from "react-redux";

import { selectQuantity, TYPE_QUANTITY } from "../actions";
import DropdownBox from "../containers/dropdown";

class QuantityItemBox extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, itemList, quantity } = this.props;

    if(!type) return null;

    let placeholder = "Select Quantity ..."

    let optionButtonNodes = itemList.map((entry) => {
      let selected = quantity === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={TYPE_QUANTITY}
      optionButtonNodes={optionButtonNodes}
      label='Print Quantity'
      selected={quantity}
      onClick={selectQuantity}
      placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: ownProps.type,
    quantity: orderApp.selectionState.quantity,
    itemList: ownProps.quantityList,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_QUANTITY) > -1
  }
}

export default connect(
  mapStateToProps
)(QuantityItemBox);
