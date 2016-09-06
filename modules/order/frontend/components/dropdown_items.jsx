import React from "react";
const Dropdown = require("react-dropdown").default;

interface ButtonState {
  id: string;
  label: string;
  selected: string;
  optionButtonNodes: OptionNode[];
  placeholder: string;
}

interface OptionNode {
  label: string;
  value: string;
}

interface PropTypes {
  onClick: ()=> void;
  state: ButtonState;
}

const SelectBox = ({onClick, state}: PropTypes) => {
  let {id, label, selected, optionButtonNodes, placeholder} = state;

  return (
    <div className='inner-section' id='print-others'>
      <label>{ label }</label>
        <Dropdown options={optionButtonNodes} onChange={onClick} value={selected} placeholder={placeholder} />
    </div>
  );
}

export default SelectBox;
