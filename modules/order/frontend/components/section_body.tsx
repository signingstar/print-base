import * as React from "react";
import { Store } from "redux";

import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";
import { FloatingPanel } from "./floating_panel";

interface PropTypes {
  store: Store<any>;
}

export class SectionBody extends React.Component<PropTypes, any> {
  store: Store<any>;
  values: any;

  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
  }

  updateState(id: string, value: string) {
    this.store.dispatch({type: 'set', key: id, val: value});
  }

  componentWillMount() {
    this.store = this.props.store;
    this.values = this.store.getState();
  }

  componentWillReceiveProps(nextProps: any) {
    this.store = nextProps.store;
    this.values = nextProps.store.getState();
  }

  render () {
    let printOptionClass = this.values.type ? 'show' : 'hide';
    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <PrintType selectedItem={this.values.type} id='type' onChange={this.updateState} states={this.values}/>
          <div className={'print-options ' + printOptionClass}>
            <PrintSize selectedItem={this.values.size}  id='size'  onChange={this.updateState} states={this.values} />
            <SelectMaterials selectedItem={this.values.material}  id='material'  onChange={this.updateState} states={this.values} />
            <PrintQuantity selectedItem={this.values.quantity}  id='quantity'  onChange={this.updateState} states={this.values} />
          </div>
        </div>
        <div className='right-panel'>
          <FloatingPanel store={this.store} />
        </div>
      </div>
    );
  }
}
