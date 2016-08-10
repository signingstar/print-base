import * as React from "react";

class SectionHeader extends React.Component<{}, {}> {
  render () {
    return (
      <div className='main-section-header'>
        <h2><a href='#'>Place an Order</a><span className='separator'>|</span><a className='active' href='#'>Get Quotation</a></h2>
      </div>
    )
  }
}

export default SectionHeader;
