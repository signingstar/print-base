import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectMaterial, CATEGORY_MATERIAL } from "../actions";

class MaterialItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];
  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  componentWillMount() {
    this.itemList = printableData(CATEGORY_MATERIAL);
  }

  visibleOptions(selectedType: string, selectedSize: string) {
    if(!selectedType) {
      return this.itemList;
    }

    let paramHash = {type: selectedType, size: selectedSize};

    return printableDataWithFilter(CATEGORY_MATERIAL, paramHash);
  }

  render() {
    let { selectedType, selectedSize, selectedItem } = this.props;
    let selectedLabel = selectedItem && selectedItem !== '' ? 'Print Material' : 'Select Print Material';

    let filteredList = this.visibleOptions(selectedType, selectedSize);

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = selectedItem === entry.id ? true : false;
      return <OptionBox category={CATEGORY_MATERIAL} id={entry.id} label={entry.value} selected={selected}  onClick={selectMaterial} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    selectedType: printApp.selectionState.type,
    selectedSize: printApp.selectionState.size,
    selectedItem: printApp.selectionState.material,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_MATERIAL) > -1
  }
}

export default connect(
  mapStateToProps
)(MaterialItemBox);
