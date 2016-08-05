import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintItem } from "./print_item";

export class SelectMaterials extends PrintItem {
  constructor() {
    super();

    this.data = [
      {id: 'p-1', value: 'Glossy paper'},
      {id: 'p-2', value: 'Plain Cloth'},
      {id: 'p-3', value: 'Shiny Cardboard'},
      {id: 'p-4', value: 'Thick wood'},
    ];

    this.update = this.update.bind(this);
  }

  displayCondition(id: string) {
    if(this.props.states['type'] === 'mugs' && id === 'p-4') {
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
        <h2>Print Material: <span>{this.getItemLabel(this.state.selectedItem)}</span></h2>
        <div>
          {optionButtonNodes}
        </div>
      </div>
    )
  }
}
