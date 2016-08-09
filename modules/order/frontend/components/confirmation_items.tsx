import * as React from "react";

const ConfirmationItems = ({state, onReset}: {state: any, onReset: ()=>void}) => {
  let { typeVal, sizeVal, materialVal, quantityVal } = state;

  return (
    <div className='right-panel-content'>
      <div className='header'><h4>Order Summary </h4></div>
      <ul className='order-summary'>
        <li><span className='label'>Print Type: </span><span>{typeVal}</span></li>
        {sizeVal ? <li><span className='label'>Print Size: </span><span>{sizeVal}</span></li> : null}
        {materialVal ? <li><span className='label'>Print Material: </span><span>{materialVal}</span></li> : null}
        {quantityVal ? <li><span className='label'>Print Quantity: </span><span>{quantityVal}</span></li> : null}
      </ul>
      <div className='estimates'><h5>Estimated Price:</h5></div>
      <div className='clear'><a href='#' onClick={onReset}>clear </a></div>
    </div>
  );
}

export default ConfirmationItems;
