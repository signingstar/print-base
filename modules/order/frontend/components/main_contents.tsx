import * as React from "react";
import { Store } from "redux";

import { SectionHeader } from "./section_header";
import SectionBody from "./section_body";
import { SectionFooter } from "./section_footer";

interface PropTypes {
  store: Store<any>;
}

export class MainContents extends React.Component<{}, {}> {
  render () {
    return (
      <section className='main-section'>
        <div className='main-section-content' id='main-section-content'>
          <SectionHeader />
          <SectionBody />
          <SectionFooter />
        </div>
      </section>
    )
  }
}
