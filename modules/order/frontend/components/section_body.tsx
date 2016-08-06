import * as React from "react";
import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";
import { PrintData } from "../presenter";
import { StoreType } from "../store_type";

interface PropTypes {
  store: StoreType;
}

export class SectionBody extends React.Component<PropTypes, any> {
  store: StoreType;

  constructor() {
    super();

    this.clearState = this.clearState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  clearState() {
    this.store.dispatch({type: 'clear'});
  }

  updateState(id: string, value: string) {
    this.store.dispatch({type: 'set', key: id.slice(6), val: value});
  }


  render () {
    this.store = this.props.store;
    const value = this.store.getState();

    let stateLabelsMap = {
      type: value.type ? PrintData['type'][value.type].label : undefined,
      size: value.size ? PrintData['size'][value.size].label : undefined,
      material: value.material ? PrintData['material'][value.material].label : undefined,
      quantity: value.quantity ? PrintData['quantity'][value.quantity].label : undefined
    };

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <PrintType selectedItem={value.type} id='print-type' onChange={this.updateState} states={value}/>
          <PrintSize selectedItem={value.size}  id='print-size' onChange={this.updateState} states={value} />
          <SelectMaterials selectedItem={value.material}  id='print-material' onChange={this.updateState} states={value} />
          <PrintQuantity selectedItem={value.quantity}  id='print-quantity' onChange={this.updateState} states={value} />
        </div>
        <div className='right-panel'>
          <div className='right-panel-content'>
            <div className='header'><h4>Order Summary </h4></div>
            <ul>
              <li className="visiting-cards-nav" id="visiting-cards-nav">Print Type: <span>{stateLabelsMap.type}</span></li>
              {stateLabelsMap.size ? <li className="stationary-nav" id="stationary-nav">Print Size: <span>{stateLabelsMap.size}</span></li> : null}
              {stateLabelsMap.material ? <li className="brouchers-nav" id="brouchers-nav">Print Material: <span>{stateLabelsMap.material}</span></li> : null}
              {stateLabelsMap.quantity ? <li className="brouchers-nav" id="brouchers-nav">Print Quantity: <span>{stateLabelsMap.quantity}</span></li> : null}
            </ul>
            <div className='estimates'><h5>Estimated Price:</h5></div>
            <div className='clear'><a href='#' onClick={this.clearState}>clear </a></div>
          </div>
        </div>
      </div>
    )
  }
}
