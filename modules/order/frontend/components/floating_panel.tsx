import * as React from "react";

import { PrintData } from "../presenter";

export class FloatingPanel extends React.Component<any, any> {
  constructor() {
    super();

    this.clearState = this.clearState.bind(this);
  }

  clearState() {
    this.props.store.dispatch({type: 'clear'});
  }

  render () {
    const value = this.props.store.getState();

    let type =  value.type ? PrintData['type'][value.type].label : undefined;
    let size = value.size ? PrintData['size'][value.size].label : undefined;
    let material =  value.material ? PrintData['material'][value.material].label : undefined;
    let quantity =  value.quantity ? PrintData['quantity'][value.quantity].label : undefined;

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
        <div className='clear'><a href='#' onClick={this.clearState}>clear </a></div>
      </div>
    );
  }
}
