import * as React from "react";
import { connect } from "react-redux";

import { printableData } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectType, CATEGORY_TYPE } from "../actions";

const itemsData = printableData('type');

class TypesItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  componentWillMount() {
    this.itemList = printableData(CATEGORY_TYPE);
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { selectedItem } = this.props;
    let selectedLabel = selectedItem && selectedItem !== '' ? 'Print Type' : 'Select Print Type';

    let optionButtonNodes = itemsData.map((entry) => {
      let selected = selectedItem === entry.id ? true : false;
      return <OptionBox category={CATEGORY_TYPE} id={entry.id} label={entry.value} selected={selected} onClick={selectType} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    selectedItem: printApp.selectionState.type,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_TYPE) > -1
  }
}

export default connect(
  mapStateToProps
)(TypesItemBox);
