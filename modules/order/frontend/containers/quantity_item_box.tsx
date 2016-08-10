import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectQuantity, CATEGORY_QUANTITY } from "../actions";

const itemsData = printableData(CATEGORY_QUANTITY);

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

    let selectedLabel = quantity && quantity !== '' ? 'Print Quantity' : 'Select Print Quantity';
    let filteredList = this.visibleOptions(type, size, material);

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = quantity === entry.id ? true : false;
      return <OptionBox category={CATEGORY_QUANTITY} id={entry.id} label={entry.value} selected={selected}  onClick={selectQuantity} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    storeState: printApp.selectionState,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_QUANTITY) > -1
  }
}

export default connect(
  mapStateToProps
)(QuantityItemBox);
