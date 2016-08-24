import * as React from "react";

const ConfirmationButton = ({isComplete}: {isComplete: boolean}) => {
  return (
    <div className='checkout-button' id='checkout'>
      <button type='submit' className={isComplete ? 'active' : 'inactive'}>Confirm Order</button>
    </div>
  );
}

export default ConfirmationButton;
