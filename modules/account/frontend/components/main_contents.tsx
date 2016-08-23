import * as React from "react";

import SectionLinks from "./section_links";

const MainContents = ({children}: {children: any}) => {
  return (
    <section>
      <SectionLinks />
      <div className='account-items'>
        {children}
      </div>
    </section>
  );
}

export default MainContents;
