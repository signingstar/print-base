import React from "react";
import { PropTypes } from "react";

const OptionButton = ({onClick, state}) => {
  let {id, label, selected, display} = state;

  return (
    <button id={id} className={'select-elem' + (selected ? ' selected' : '')} display={display ? 'none' : 'inline'} onClick={onClick}>
      {label}
    </button>
  );
}


export default OptionButton;
