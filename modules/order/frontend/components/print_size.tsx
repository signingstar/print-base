import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintTypeState } from "./basic_option_state";

export class PrintSize extends React.Component<{}, PrintTypeState> {
  data: {};
  constructor() {
    super();
    this.state = {
      selectedItem: ''
    };
    this.data = {
      's-1': "2' x 3'",
      'm-1': "4' x 7'",
      'l-1': "10' x 17'",
      'xl-1': "30' x 50'"
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
          <OptionButton id='s-1' label={this.data['s-1']} selected={this.state.selectedItem === 's-1'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='m-1' label={this.data['m-1']} selected={this.state.selectedItem === 'm-1'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='l-1' label={this.data['l-1']} selected={this.state.selectedItem === 'l-1'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='xl-1' label={this.data['xl-1']} selected={this.state.selectedItem === 'xl-1'?  true : false} onClick={this.update.bind(this)} />
        </div>
      </div>
    )
  }
}
