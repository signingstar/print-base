import * as React from "react";
import { connect } from "react-redux";

import { printableData } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectSize } from "../actions";

const itemsData = printableData('size');

class SizesItemBox extends React.Component<any, any> {
  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.selectedItem !== this.props.selectedItem;
  }

  render() {
    let { selectedItem } = this.props;
    let isSelected = selectedItem && selectedItem !== '' ? true : false;

    let optionButtonNodes = itemsData.map((entry) => {
      let selected = selectedItem === entry.id ? true : false;
      return <OptionBox id={entry.id} label={entry.value} selected={selected}  onClick={selectSize} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} selected={isSelected} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    selectedItem: printApp.selectionState.size
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
