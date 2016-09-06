import { connect } from "react-redux";

import SelectBox from "../components/dropdown_items";

const getLabelForValue = (val, optionButtonNodes) => {
  if(!val) return;

  let node = optionButtonNodes.find(entry => entry.value === val);
  return node.label;
}

const mapStateToProps = (state, ownProps) => {
  let { id, label, selected, optionButtonNodes, placeholder } = ownProps;

  let selectedLabel = getLabelForValue(selected, optionButtonNodes);

  return {
    state: { id, label, selected: selectedLabel, optionButtonNodes, placeholder }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (val: any) => {
      if(ownProps.selected !== val.value) {
        dispatch(ownProps.onClick(val.value))
      }
    }
  }
}

const DropdownBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBox)

export default DropdownBox;
