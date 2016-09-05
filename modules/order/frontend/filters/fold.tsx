import * as React from "react";
import { connect } from "react-redux";

import { selectFold, TYPE_FOLD } from "../actions";
import DropdownBox from "../containers/dropdown";

class Fold extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, size, material, itemList, fold } = this.props;
    if(!type) return null;

    let placeholder = "Select number of folds ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = fold === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox category={TYPE_FOLD} optionButtonNodes={optionButtonNodes} label='Print Fold' selected={fold} onClick={selectFold} placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: ownProps.type,
    itemList: ownProps.foldList,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_FOLD) > -1
  }
}

export default connect(
  mapStateToProps
)(Fold);
