import * as React from "react";
import { PropTypes } from "react";

interface ButtonState {
  id: string;
  label: string;
  selected: boolean;
  display: boolean;
}

interface PropTypes {
  onClick: ()=> void;
  state: ButtonState;
}

const OptionButton = ({onClick, state}: PropTypes) => {
  let {id, label, selected, display} = state;

  return (
    <button id={id} className={'select-elem' + (selected ? ' selected' : '')} display={display ? 'none' : 'inline'} onClick={onClick}>
      {label}
    </button>
  );
}


export default OptionButton;
