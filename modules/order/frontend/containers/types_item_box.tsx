import * as React from "react";
import { connect } from "react-redux";

import { printableData } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectType, CATEGORY_TYPE } from "../actions";

class TypesItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  componentWillMount() {
    this.itemList = printableData(CATEGORY_TYPE);
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type } = this.props;
    let selectedLabel = type && type !== '' ? 'Print Type' : 'What would you like to print';

    let optionButtonNodes = this.itemList.map((entry) => {
      let selected = type === entry.id ? true : false;
      return <OptionBox category={CATEGORY_TYPE} id={entry.id} label={entry.value} selected={selected} onClick={selectType} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} label={selectedLabel} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    type: printApp.selectionState.type,
    shouldUpdate: printApp.selectionState.updateComponents.indexOf(CATEGORY_TYPE) > -1
  }
}

export default connect(
  mapStateToProps
)(TypesItemBox);
