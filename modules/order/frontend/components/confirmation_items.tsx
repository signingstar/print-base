import * as React from "react";

const ConfirmationItems = ({state, onReset}: {state: any, onReset: ()=>void}) => {
  let { type, size, material, quantity } = state;

  return (
    <div className='right-panel-content'>
      <div className='header'><h4>Order Summary </h4></div>
      <ul className='order-summary'>
        <li><span className='label'>Print Type: </span><span>{type}</span></li>
        {size ? <li><span className='label'>Print Size: </span><span>{size}</span></li> : null}
        {material ? <li><span className='label'>Print Material: </span><span>{material}</span></li> : null}
        {quantity ? <li><span className='label'>Print Quantity: </span><span>{quantity}</span></li> : null}
      </ul>
      <div className='estimates'><h5>Estimated Price:</h5></div>
      <div className='clear'><a href='#' onClick={onReset}>clear </a></div>
    </div>
  );
}

export default ConfirmationItems;
