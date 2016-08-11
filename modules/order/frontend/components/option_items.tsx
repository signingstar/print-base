import * as React from "react";

const OptionItems = ({label, optionButtonNodes}: {label: string, optionButtonNodes: any}) => {
  return (
    <div className='inner-section main' id='print-type'>
      <h2>{ label }</h2>
      <div>
        {optionButtonNodes}
      </div>
    </div>
  );
}

export default OptionItems;
