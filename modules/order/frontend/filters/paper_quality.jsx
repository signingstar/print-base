import React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import { setPaperQuality, PAPER_QUALITY } from "../actions/index";
import DropdownBox from "../containers/dropdown";

class PaperQuality extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { itemList, paper_quality } = this.props;

    let placeholder = "Select Paper Quality ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = paper_quality === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={PAPER_QUALITY}
      optionButtonNodes={optionButtonNodes}
      label='Paper Quality'
      selected={paper_quality}
      onClick={setPaperQuality}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    itemList: ownProps.paperQualityList,
    paper_quality: orderApp.selectionState.paper_quality,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(PAPER_QUALITY) > -1
  }
}

export default connect(
  mapStateToProps
)(PaperQuality);
