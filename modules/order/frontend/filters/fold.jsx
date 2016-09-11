import React from "react";
import { connect } from "react-redux";

import { setFold, FOLD } from "../actions/index";
import DropdownBox from "../containers/dropdown";

class Fold extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { itemList, fold } = this.props;

    let placeholder = "Select number of folds ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = fold === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={FOLD}
      optionButtonNodes={optionButtonNodes}
      label='Print Fold'
      selected={fold}
      onClick={setFold}
      placeholder={placeholder} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    fold: orderApp.selectionState.fold,
    itemList: ownProps.foldList,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(FOLD) > -1
  }
}

export default connect(
  mapStateToProps
)(Fold);
