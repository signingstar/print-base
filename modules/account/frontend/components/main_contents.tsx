import * as React from "react";

import SectionLinks from "./section_links";

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
  );
}

export default MainContents;
