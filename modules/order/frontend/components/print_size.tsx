import * as React from "react";

import { OptionButton } from "./option_button";
import { PrintItem } from "./print_item";
import { printableData } from "../presenter";

const data = printableData('size');

export class PrintSize extends PrintItem {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  shouldDisplayInnerComponent(id: string) {
    if(this.props.states['type'] === 't_shirts' && id === 'xl-1') {
      return false;
    }

    return true;
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.states.size !== this.props.states.size || nextProps.states.type !== this.props.states.type;
  }

  render () {
    let optionButtonNodes = data.map((entry) => {
      let selected = this.states.size === entry.id ?  true : false;
      if(this.shouldDisplayInnerComponent(entry.id)) {
        return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
      }
    });

    return (
      <div className='inner-section' id={'print-' + this.props.id}>
        <h2>{ this.states.size ? 'Print Size' : 'Select Print Size' }</h2>
        <div>
          { optionButtonNodes }
        </div>
      </div>
    )
  }
}
