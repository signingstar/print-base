import * as React from "react";

import SectionHeader from "./section_header";
import SectionBody from "./section_body";

class MainContents extends React.Component<{}, {}> {
  render () {
    return (
      <section>
        <div className='main-section-content'>
          <SectionHeader />
          <SectionBody />
        </div>
      </section>
    )
  }
}

export default MainContents;
