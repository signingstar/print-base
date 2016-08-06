import * as React from "react";

import { PrintItem } from "./print_item";
import { OptionButton } from "./option_button";
import { printableData } from "../presenter";

export class PrintType extends PrintItem {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  render () {
    const data = printableData('type');

    let optionButtonNodes = data.map((entry) => {
      let selected = this.state.selectedItem === entry.id ?  true : false;
      return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
    });

    return (
      <div className='inner-section' id={'print-' + this.props.id}>
        <h2>{ this.state.selectedItem ? 'Print Type' : 'Select Print Type' }</h2>
        <div>
          {optionButtonNodes}
        </div>
      </div>
    )
  }
}
