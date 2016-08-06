import * as React from "react";
import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";
import { PrintData } from "../presenter";

export class SectionBody extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      type: 'brouchers',
      size: 'm-1',
      material: 'p-3',
      quantity: 'q-1',
    };

    this.clearState = this.clearState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  clearState() {
    this.setState({
      type: '',
      size: '',
      material: '',
      quantity: ''
    });
  }

  updateState(id: string, value: string) {
    let stateMap: {[name: string]: string} = {};
    if(id === 'print-types') {
      stateMap['type'] = value;
      stateMap['size'] = '';
      stateMap['material'] = '';
      stateMap['quantity'] = '';
    } else if(id === 'print-sizes') {
      stateMap['size'] = value;
    } else if(id === 'print-materials') {
      stateMap['material'] = value;
    } else if(id === 'print-quantity') {
      stateMap['quantity'] = value;
    }

    this.setState(stateMap);
  }


  render () {
    let stateLabelsMap = {
      type: this.state.type ? PrintData['type'][this.state.type].label : undefined,
      size: this.state.size ? PrintData['size'][this.state.size].label : undefined,
      material: this.state.material ? PrintData['material'][this.state.material].label : undefined,
      quantity: this.state.quantity ? PrintData['quantity'][this.state.quantity].label : undefined
    };

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <PrintType selectedItem={this.state.type} id='print-types' onChange={this.updateState} states={this.state}/>
          <PrintSize selectedItem={this.state.size}  id='print-sizes' onChange={this.updateState} states={this.state} />
          <SelectMaterials selectedItem={this.state.material}  id='print-materials' onChange={this.updateState} states={this.state} />
          <PrintQuantity selectedItem={this.state.quantity}  id='print-quantity' onChange={this.updateState} states={this.state} />
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
