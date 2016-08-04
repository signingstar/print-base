import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintTypeState } from "./basic_option_state";

export class SelectMaterials extends React.Component<{}, PrintTypeState> {
  data: {};
  constructor() {
    super();
    this.state = {
      selectedItem: ''
    };
    this.data = {
      'p-1': "Glossy paper",
      'p-2': "Plain Cloth",
      'p-3': "Shiny Cardboard",
      'p-4': "Thick wood"
    }
  }

  update(e:any) {
    this.setState({
      selectedItem: e.id
    });
    e.selected=true;
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextState.selectedItem != this.state.selectedItem;
  }
  render () {
    return (
      <div className='inner-section' id='print-sizes'>
        <h2>Print Size</h2>
        <div>
          <OptionButton id='p-1' label={this.data['p-1']} selected={this.state.selectedItem === 'p-1'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='p-2' label={this.data['p-2']} selected={this.state.selectedItem === 'p-2'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='p-3' label={this.data['p-3']} selected={this.state.selectedItem === 'p-3'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='p-4' label={this.data['p-4']} selected={this.state.selectedItem === 'p-4'?  true : false} onClick={this.update.bind(this)} />
        </div>
      </div>
    )
  }
}
