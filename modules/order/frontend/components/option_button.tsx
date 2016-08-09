import * as React from "react";
import { PropTypes } from "react";

interface ButtonState {
  id: string;
  label: string;
  selected: boolean;
}

interface PropTypes {
  onClick: ()=> void;
  state: ButtonState;
}

const OptionButton = ({onClick, state}: PropTypes) => {
  let {id, label, selected} = state;

  return (
    <button id={id} className={'select-elem' + (selected ? ' selected' : '')} onClick={onClick}>
      {label}
    </button>
  );
}


export default OptionButton;
