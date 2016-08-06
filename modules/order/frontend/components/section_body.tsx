import * as React from "react";
import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";
import { Store } from "redux";
import { FloatingPanel } from "./floating_panel";

interface PropTypes {
  store: Store<any>;
}

export class SectionBody extends React.Component<PropTypes, any> {
  store: Store<any>;

  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
  }

  updateState(id: string, value: string) {
    this.store.dispatch({type: 'set', key: id.slice(6), val: value});
  }


  render () {
    this.store = this.props.store;
    const value = this.store.getState();

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <PrintType selectedItem={value.type} id='print-type' onChange={this.updateState} states={value}/>
          <PrintSize selectedItem={value.size}  id='print-size' onChange={this.updateState} states={value} />
          <SelectMaterials selectedItem={value.material}  id='print-material' onChange={this.updateState} states={value} />
          <PrintQuantity selectedItem={value.quantity}  id='print-quantity' onChange={this.updateState} states={value} />
        </div>
        <div className='right-panel'>
          <FloatingPanel store={this.store} />

        </div>
      </div>
    )
  }
}
