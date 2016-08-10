import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectSize, CATEGORY_SIZE } from "../actions";

class SizesItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];
  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  componentWillMount() {
    this.itemList = printableData(CATEGORY_SIZE);
  }

  visibleOptions(selectedType: string) {
    return selectedType ? printableDataWithFilter(CATEGORY_SIZE, {type: selectedType}) : this.itemList;
  }

  render() {
    let { selectedType, selectedItem } = this.props;
    let selectedLabel = selectedItem && selectedItem !== '' ? 'Print Size' : 'Select Print Size';

    let filteredList = this.visibleOptions(selectedType);

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = selectedItem === entry.id ? true : false;
      return <OptionBox category={CATEGORY_SIZE} id={entry.id} label={entry.value} selected={selected}  onClick={selectSize} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    selectedType: printApp.selectionState.type,
    selectedItem: printApp.selectionState.size,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_SIZE) > -1
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
