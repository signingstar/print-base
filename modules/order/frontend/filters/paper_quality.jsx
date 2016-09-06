import React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import { setPaperQuality, TYPE_PAPER_QUALITY } from "../actions";
import DropdownBox from "../containers/dropdown";

class PaperQuality extends React.Component {
  itemList: {id: string, value: string}[];

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, itemList, paper_quality } = this.props;

    if(!type) return null;

    let placeholder = "Select Paper Quality ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = paper_quality === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox category={TYPE_PAPER_QUALITY} optionButtonNodes={optionButtonNodes} label='Paper Quality' selected={paper_quality} onClick={setPaperQuality} placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: ownProps.type,
    itemList: ownProps.paperQualityList,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_PAPER_QUALITY) > -1
  }
}

export default connect(
  mapStateToProps
)(PaperQuality);
