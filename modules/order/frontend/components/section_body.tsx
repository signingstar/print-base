import * as React from "react";
import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";

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

  // shouldComponentUpdate(nextProps:any, nextState:any) {
  //   return nextState.type != this.state.type;
  // }

  render () {
    let states = this.state;
    return (
      <div className='main-section-body'>
        <button onClick={this.clearState}>Cleal All </button>
        <PrintType selectedItem={this.state.type} id='print-types' onChange={this.updateState} states={this.state}/>
        <PrintSize selectedItem={this.state.size}  id='print-sizes' onChange={this.updateState} states={this.state} />
        <SelectMaterials selectedItem={this.state.material}  id='print-materials' onChange={this.updateState} states={this.state} />
        <PrintQuantity selectedItem={this.state.quantity}  id='print-quantity' onChange={this.updateState} states={this.state} />
      </div>
    )
  }
}
