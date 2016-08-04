import * as React from "react";
import * as ReactDOM from "react-dom";
import { OptionButton } from "./option_button";
import { PrintTypeState } from "./basic_option_state";

export class PrintType extends React.Component<{}, PrintTypeState> {
  data: {};
  constructor() {
    super();
    this.state = {
      selectedItem: ''
    };
    this.data = {
      'visiting_card': 'Visiting Cards',
      'stationary': 'Stationary',
      'brouchers': 'Brouchers',
      'mugs': 'Coffee Mugs',
      't_shirts': 'T-Shirts',
      'posters': 'Posters'
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
      <div className='inner-section' id='print-types'>
        <h2>Print Type</h2>
        <div>
          <OptionButton id='stationary' label={this.data['stationary']} selected={this.state.selectedItem === 'stationary'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='brouchers' label={this.data['brouchers']} selected={this.state.selectedItem === 'brouchers'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='mugs' label={this.data['mugs']} selected={this.state.selectedItem === 'mugs'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='t_shirts' label={this.data['t_shirts']} selected={this.state.selectedItem === 't_shirts'?  true : false} onClick={this.update.bind(this)} />
          <OptionButton id='posters' label={this.data['posters']} selected={this.state.selectedItem === 'posters'?  true : false} onClick={this.update.bind(this)} />
        </div>
      </div>
    )
  }
}
