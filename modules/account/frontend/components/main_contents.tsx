import * as React from "react";
import { Router, hashHistory } from 'react-router';

import SectionLinkContainer from "../containers/section_links";
import routes from "../routes";

const MainContents = ({children}: {children: any}) => {
  return (
    <section className='main-section'>
      <SectionLinkContainer />
      {children}
    </section>
  );
}

export default MainContents;
