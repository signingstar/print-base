import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectCoat, CATEGORY_COAT } from "../actions";
import DropdownBox from "./dropdown_box";

class CoatingBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  componentWillMount() {
    this.itemList = printableData(CATEGORY_COAT);
  }

  visibleOptions(type: string, size: string) {
    if(!type) {
      return this.itemList;
    }

    return printableDataWithFilter(CATEGORY_COAT, {type, size});
  }

  render() {
    let { type, size, material, coat } = this.props;

    if(!type) return null;

    let filteredList = this.visibleOptions(type, size);
    let placeholder = "Select Coating ...";

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = coat === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox category={CATEGORY_COAT} optionButtonNodes={optionButtonNodes} label='Print Coating' selected={coat} onClick={selectCoat} placeholder={placeholder}/>
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type,
    size: orderApp.selectionState.size,
    material: orderApp.selectionState.material,
    coat: orderApp.selectionState.coat,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(CATEGORY_COAT) > -1
  }
}

export default connect(
  mapStateToProps
)(CoatingBox);
