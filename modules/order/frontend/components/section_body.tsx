import * as React from "react";

import PrintSize from "../filters/size";
import CoatingBox from "../filters/coat";
import Confirmation from "../containers/confirmation";
import Stationary from "../print_types/stationary/main";

const SectionBody = ({children}: {children:any}) => {
  return (
    <div className='main-section-body'>
      <div className='left-panel'>
        {children}
      </div>
      <div className='right-panel'>
        <Confirmation />
      </div>
    </div>
  );
}

export default SectionBody;
