import React from "react";

const Button = ({isComplete, onSubmit}) => {
  return (
    <div className='checkout-button' id='checkout'>
      <button type='submit' onClick={onSubmit} className={isComplete ? 'active' : 'inactive'}>Confirm Order</button>
    </div>
  );
}

export default Button;
