import * as React from "react";
import { PropTypes } from "react";

interface ButtonState {
  id: string;
  label: string;
  selected: boolean;
}

const OptionButton = ({onClick, state}: {onClick: ()=> void, state: ButtonState}) => {
  let {id, label, selected} = state;
  return (
    <button id={id} className={'select-elem' + (selected ? ' selected' : '')} onClick={onClick}>
      {label}
    </button>
  );
}

OptionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
}

export default OptionButton;
