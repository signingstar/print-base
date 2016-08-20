import * as React from "react";
import { Router, hashHistory } from 'react-router';

import SectionLinkContainer from "../containers/section_links";
import routes from "../routes";

const MainContents = ({children}: {children: any}) => {
  return (
    <section className='main-section'>
      <section className='main-section-content'>
        <SectionLinkContainer />
        <div className='account-items'>
          {children}
        </div>
      </section>
    </section>
  );
}

export default MainContents;
