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

  visibleOptions(type: string) {
    return type ? printableDataWithFilter(CATEGORY_SIZE, {type}) : this.itemList;
  }

  render() {
    let { type, size } = this.props;
    let selectedLabel = size && size !== '' ? 'Print Size' : 'Select Print Size';

    let filteredList = this.visibleOptions(type);

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = size === entry.id ? true : false;
      return <OptionBox category={CATEGORY_SIZE} id={entry.id} label={entry.value} selected={selected}  onClick={selectSize} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    type: printApp.selectionState.type,
    size: printApp.selectionState.size,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_SIZE) > -1
  }
}

export default connect(
  mapStateToProps
)(SizesItemBox);
