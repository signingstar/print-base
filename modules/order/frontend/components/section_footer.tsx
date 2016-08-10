import * as React from "react";

class SectionFooter extends React.Component<{}, {}> {
  render () {
    return (
      <div className='main-section-footer'>
        <div className='inner-section' id='checkout'>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    )
  }
}

export default SectionFooter;
