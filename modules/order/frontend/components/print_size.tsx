import * as React from "react";
import { OptionButton } from "./option_button";
import { PrintItem } from "./print_item";

export class PrintSize extends PrintItem {
  constructor() {
    super();

    this.data = [
      {id: 's-1', value: "2' x 3'"},
      {id: 'm-1', value: "4' x 7'"},
      {id: 'l-1', value: "10' x 17'"},
      {id: 'xl-1', value: "30' x 50'"},
    ];

    this.update = this.update.bind(this);
  }

  displayCondition(id: string) {
    if(this.props.states['type'] === 't_shirts' && id === 'xl-1') {
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
        <h2>{ this.state.selectedItem ? 'Select Print Size' : 'Print Size' }</h2>
        <div>
          {this.props.states.type !== '' ? optionButtonNodes : null}
        </div>
      </div>
    )
  }
}
