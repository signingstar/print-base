import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintTypeState } from "./basic_option_state";

export class PrintQuantity extends React.Component<{}, PrintTypeState> {
  data: {};
  constructor() {
    super();
    this.state = {
      selectedItem: ''
    };
    this.data = {
      'q-1': "1 - 10",
      'q-2': "10 - 50",
      'q-3': "50 - 500",
      'q-4': "500 - 2000"
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
          <OptionButton id='q-1' label={this.data['q-1']} selected={this.state.selectedItem === 'q-1'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='q-2' label={this.data['q-2']} selected={this.state.selectedItem === 'q-2'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='q-3' label={this.data['q-3']} selected={this.state.selectedItem === 'q-3'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='q-4' label={this.data['q-4']} selected={this.state.selectedItem === 'q-4'?  true : false} onClick={this.update.bind(this)} />
        </div>
      </div>
    )
  }
}
