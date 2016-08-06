import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintItem } from "./print_item";
import { printableData } from "../presenter";

export class SelectMaterials extends PrintItem {
  constructor() {
    super();

    this.update = this.update.bind(this);
  }

  displayCondition(id: string) {
    if(this.props.states['type'] === 'mugs' && id === 'p-4') {
      return false;
    }

    return true;
  }

  render () {
    const data = printableData('material');

    let optionButtonNodes = data.map((entry) => {
      let selected = this.state.selectedItem === entry.id ?  true : false;
      if(this.displayCondition(entry.id)) {
        return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
      }
    });

    return (
      <div className='inner-section' id={'print-' + this.props.id}>
        <h2>{ this.state.selectedItem ? 'Print Material' : 'Select Print Material' }</h2>
        <div>
          {this.props.states.type !== '' ? optionButtonNodes : null}
        </div>
      </div>
    )
  }
}
