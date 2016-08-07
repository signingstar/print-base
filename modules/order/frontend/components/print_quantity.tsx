import * as React from "react";

import { PrintItem } from "./print_item";
import { OptionButton } from "./option_button";
import { printableData } from "../presenter";

const data = printableData('quantity');

export class PrintQuantity extends PrintItem {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  shouldDisplayInnerComponent(id: string) {
    if(this.props.states['type'] === 'visiting_card' && id === 'q-1') {
      return false;
    }

    return true;
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.states.quantity !== this.props.states.quantity || nextProps.states.type !== this.props.states.type;
  }

  render () {
    let optionButtonNodes = data.map((entry) => {
      let selected = this.states.quantity === entry.id ?  true : false;
      if(this.shouldDisplayInnerComponent(entry.id)) {
        return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
      }
    });

    return (
      <div className='inner-section' id={'print-' + this.props.id}>
        <h2>{ this.states.quantity ? 'Print Quantity' : 'Select Print Quantity' }</h2>
        <div>
          { optionButtonNodes }
        </div>
      </div>
    )
  }
}
