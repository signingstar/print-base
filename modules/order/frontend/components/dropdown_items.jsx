import React from "react";
import Dropdown from "react-dropdown";

const SelectBox = ({onClick, state}) => {
  let {id, label, selected, optionButtonNodes, placeholder} = state;

  return (
    <div className='inner-section' id='print-others'>
      <label>{ label }</label>
        <Dropdown options={optionButtonNodes} onChange={onClick} value={selected} placeholder={placeholder} />
    </div>
  );
}

export default SelectBox;
