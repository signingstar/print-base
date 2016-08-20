import * as React from "react";
import { connect } from "react-redux";
import { Router, hashHistory } from "react-router";
import { ajax } from "jquery";

import SectionLinks from "./section_links";
import routes from "../routes";
import GlobalState from "../data_types/global_state";

const MainContents = ({children}: {children: any}) => {
  return (
    <section className='main-section'>
      <section className='main-section-content'>
        <SectionLinks />
        <div className='account-items'>
          {children}
        </div>
      </section>
    </section>
  )
}

export default MainContents;
