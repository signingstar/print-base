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

    let stateLabelsMap = {
      type: value.type ? PrintData['type'][value.type].label : undefined,
      size: value.size ? PrintData['size'][value.size].label : undefined,
      material: value.material ? PrintData['material'][value.material].label : undefined,
      quantity: value.quantity ? PrintData['quantity'][value.quantity].label : undefined
    };

    return (
      <div className='right-panel-content'>
        <div className='header'><h4>Order Summary </h4></div>
        <ul>
          <li className="visiting-cards-nav" id="visiting-cards-nav">Print Type: <span>{stateLabelsMap.type}</span></li>
          <li className="stationary-nav">Print Size: <span>{stateLabelsMap.size}</span></li>
          <li className="brouchers-nav">Print Material: <span>{stateLabelsMap.material}</span></li>
          <li className="brouchers-nav">Print Quantity: <span>{stateLabelsMap.quantity}</span></li>
        </ul>
        <div className='estimates'><h5>Estimated Price:</h5></div>
        <div className='clear'><a href='#' onClick={this.clearState}>clear </a></div>
      </div>
    );
  }
}
