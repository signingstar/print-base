import * as React from "react";
import { connect } from "react-redux";

import { selectCoat, TYPE_COAT } from "../actions";
import DropdownBox from "../containers/dropdown";

class CoatingBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, itemList, coat } = this.props;

    if(!type) return null;

    let placeholder = "Select Coating ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = coat === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox category={TYPE_COAT} optionButtonNodes={optionButtonNodes} label='Print Coating' selected={coat} onClick={selectCoat} placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: ownProps.type,
    itemList: ownProps.coatList,
    coat: orderApp.selectionState.coat,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_COAT) > -1
  }
}

export default connect(
  mapStateToProps
)(CoatingBox);
