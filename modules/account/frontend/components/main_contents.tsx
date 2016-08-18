import * as React from "react";

import SectionHeader from "./section_header";
import SectionBody from "./section_body";

const MainContents = () => {
  return (
    <section className='main-section'>
      <SectionHeader />
      <SectionBody />
    </section>
  );
}

export default MainContents;
