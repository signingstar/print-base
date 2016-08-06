import * as React from "react";
import { SectionHeader } from "./section_header";
import { SectionBody } from "./section_body";
import { SectionFooter } from "./section_footer";
import { StoreType } from "../store_type";

interface PropTypes {
  store: StoreType;
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
