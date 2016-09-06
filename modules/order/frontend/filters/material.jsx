import React from "react";
import { connect } from "react-redux";

import { selectSurface, TYPE_SURFACE } from "../actions";
import DropdownBox from "../containers/dropdown";

class MaterialItemBox extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { material, itemList } = this.props;

    let placeholder = "Select Material ...";

    let optionButtonNodes = itemList.map((entry) => {
      let selected = material === entry.id ? true : false;
      return {value: entry.id, label: entry.value};
    });

    return <DropdownBox
      category={TYPE_SURFACE}
      optionButtonNodes={optionButtonNodes}
      label='Print Material'
      selected={material}
      onClick={selectSurface}
      placeholder={placeholder}
    />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    itemList: ownProps.materialList,
    material: orderApp.selectionState.material,
    shouldUpdate: orderApp.selectionState.updateComponents.indexOf(TYPE_SURFACE) > -1
  }
}

export default connect(
  mapStateToProps
)(MaterialItemBox);
