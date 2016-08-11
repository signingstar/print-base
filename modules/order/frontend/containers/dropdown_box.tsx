import { connect } from "react-redux";

import SelectBox from "../components/dropdown_items";
import { fetchLabelForCategoryAndId } from "../presenter";

interface OwnProps {
  category: string;
  id: string;
  label: string;
  selected: string;
  optionButtonNodes: any;
  placeholder: string;
}

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  let { category, id, label, selected, optionButtonNodes, placeholder } = ownProps;
  let selectedLabel = selected ? fetchLabelForCategoryAndId(category, selected) : undefined;

  return {
    state: { id, label, selected: selectedLabel, optionButtonNodes, placeholder }
  }
}

const mapDispatchToProps = (dispatch: (e:any)=>()=>void, ownProps: any) => {
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
