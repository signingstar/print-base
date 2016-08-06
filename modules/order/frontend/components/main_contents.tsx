import * as React from "react";
import { Store } from "redux";

import { SectionHeader } from "./section_header";
import { SectionBody } from "./section_body";
import { SectionFooter } from "./section_footer";

interface PropTypes {
  store: Store<any>;
}

export class MainContents extends React.Component<PropTypes, {}> {
  render () {
    return (
      <section className='main-section'>
        <div className='main-section-content' id='main-section-content'>
          <div className='left-panel'>
            <SectionHeader />
            <SectionBody store={this.props.store} />
            <SectionFooter />
          </div>
        </div>
      </section>
    )
  }
}