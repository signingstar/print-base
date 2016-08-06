import * as React from "react";
import { PrintItem } from "./print_item";
import { OptionButton } from "./option_button";

export class PrintQuantity extends PrintItem {
  constructor() {
    super();

    this.data = [
      {id: 'q-1', value: '1 - 10'},
      {id: 'q-2', value: '10 - 50'},
      {id: 'q-3', value: '50 - 500'},
      {id: 'q-4', value: '500 - 2000'},
    ];

    this.update = this.update.bind(this);
  }

  displayCondition(id: string) {
    if(this.props.states['type'] === 'visiting_card' && id === 'q-1') {
      return false;
    }

    return true;
  }

  render () {
    let optionButtonNodes = this.data.map((entry) => {
      let selected = this.state.selectedItem === entry.id ?  true : false;
      if(this.displayCondition(entry.id)) {
        return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
      }
    });

    return (
      <div className='inner-section' id={this.props.id}>
        <h2>{ this.state.selectedItem ? 'Print Quantity' : 'Select Print Quantity' }</h2>
        <div>
          {this.props.states.type !== '' ? optionButtonNodes : null}
        </div>
      </div>
    )
  }
}
