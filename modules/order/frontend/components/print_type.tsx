import * as React from "react";
import { PrintItem } from "./print_item";
import { OptionButton } from "./option_button";

export class PrintType extends PrintItem {
  constructor() {
    super();
    this.data = [
      {id: 'visiting_card', value: 'Visiting Cards'},
      {id: 'stationary', value: 'Stationary'},
      {id: 'brouchers', value: 'Brouchers'},
      {id: 'mugs', value: 'Coffee Mugs'},
      {id: 't_shirts', value: 'T-Shirts'},
    ];

    this.update = this.update.bind(this);
  }

  render () {
    let optionButtonNodes = this.data.map((entry) => {
      let selected = this.state.selectedItem === entry.id ?  true : false;
      return <OptionButton id={entry.id} label={entry.value} selected={selected} onClick={this.update} key={entry.id}/>;
    });

    return (
      <div className='inner-section' id={this.props.id}>
        <h2>{ this.state.selectedItem ? 'Print Type' : 'Select Print Type' }</h2>
        <div>
          {optionButtonNodes}
        </div>
      </div>
    )
  }
}
