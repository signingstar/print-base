import * as React from "react";

import CheckoutButton from "./checkout_button";

class ConfirmationItems extends React.Component<any, any> {
  hasDisplayed: boolean = false;

  render() {
    let { typeVal, sizeVal, materialVal, quantityVal, onReset } = this.props;

    if(!typeVal && !this.hasDisplayed) return null;

    this.hasDisplayed = true;

    return (
      <div className='right-panel-content'>
        <div className='confirmation-content'>
        <div className='clear'><span onClick={onReset}>clear</span></div>
          <div className='header'><h4>Order Summary </h4></div>
          <ul className='order-summary'>
            <li><span className='label'>Print Type: </span><span>{typeVal}</span></li>
            <li><span className='label'>Print Size: </span><span>{sizeVal}</span></li>
            <li><span className='label'>Print Material: </span><span>{materialVal}</span></li>
            <li><span className='label'>Print Quantity: </span><span>{quantityVal}</span></li>
          </ul>
          <div className='estimates'><h5>Estimated Price:</h5></div>
        </div>
        <CheckoutButton />
      </div>
    );
  }
}

export default ConfirmationItems;
