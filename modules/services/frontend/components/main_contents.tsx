import * as React from "react";

import SectionLinks from "./section_links";

const MainContents = ({children}: {children: any}) => {
  return (
    <section className='main-section'>
      <div className='body reverse'>
        <SectionLinks />
        <div className='right-panel'>
          {children}
        </div>
      </div>
    </section>
  );
}

export default MainContents;
