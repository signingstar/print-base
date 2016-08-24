import * as React from "react";
import { connect } from "react-redux";

import { printableData, printableDataWithFilter } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectSurface, CATEGORY_SURFACE } from "../actions";
import DropdownBox from "./dropdown_box";

class MaterialItemBox extends React.Component<any, any> {
  itemList: {id: string, value: string}[];

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  componentWillMount() {
    this.itemList = printableData(CATEGORY_SURFACE);
  }

  visibleOptions(type: string, size: string) {
    if(!type) {
      return this.itemList;
    }

    return printableDataWithFilter(CATEGORY_SURFACE, {type, size});
  }

  render() {
    let { type, size, material } = this.props;

    if(!type) return null;

    let filteredList = this.visibleOptions(type, size);
    let placeholder = "Select Material ...";

    let optionButtonNodes = filteredList.map((entry) => {
      let selected = material === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={CATEGORY_SURFACE}
      optionButtonNodes={optionButtonNodes}
      label='Print Material'
      selected={material}
      onClick={selectSurface}
      placeholder={placeholder}
    />
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type,
    size: orderApp.selectionState.size,
    material: orderApp.selectionState.material,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(CATEGORY_SURFACE) > -1
  }
}

export default connect(
  mapStateToProps
)(MaterialItemBox);
