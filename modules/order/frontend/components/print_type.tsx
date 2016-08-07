import * as React from "react";

import { PrintItem } from "./print_item";
import { OptionButton } from "./option_button";
import { printableData } from "../presenter";

const data = printableData('type');

export class PrintType extends PrintItem {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.states.type !== this.props.states.type;
  }

  render () {
    let optionButtonNodes = data.map((entry) => {
      let selected = this.states.type === entry.id ?  true : false;
      return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
    });

    return (
      <div className='inner-section' id={'print-' + this.props.id}>
        <h2>{ this.states.type ? 'Print Type' : 'Select Print Type' }</h2>
        <div>
          {optionButtonNodes}
        </div>
      </div>
    )
  }
}
