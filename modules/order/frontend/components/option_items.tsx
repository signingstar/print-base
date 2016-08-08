import * as React from "react";

const OptionItems = ({selected, optionButtonNodes}: {selected: boolean, optionButtonNodes: any}) => {
  return (
    <div className='inner-section' id='print-type'>
      <h2>{ selected ? 'Print Type' : 'Select Print Type' }</h2>
      <div>
        {optionButtonNodes}
      </div>
    </div>
  );
}

export default OptionItems;
