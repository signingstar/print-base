import * as React from "react";

import MenuStates from "../containers/menu_states";
import SectionBody from "./section_body";

const MainContents = () => {
  return (
    <section className='main-section'>
      <MenuStates />
      <SectionBody />
    </section>
  );
}

export default MainContents;
