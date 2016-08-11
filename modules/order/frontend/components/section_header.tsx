import * as React from "react";

class SectionHeader extends React.Component<{}, {}> {
  render () {
    return (
      <div className='main-section-header'>
        <h3><a href='#'>Place an Order</a><span className='separator'>|</span><a className='active' href='#'>Get Quotation</a></h3>
      </div>
    )
  }
}

export default SectionHeader;
