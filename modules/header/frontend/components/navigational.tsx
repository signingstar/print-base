import * as React from "react";

import SubNav from "./sub_nav";

const Navigational = ({origConfig}: {origConfig: any}) => {
  if(!origConfig) {
    return null;
  }

  let topLevelNodes = origConfig.map((topOption: any) => {
    return <SubNav topOption={topOption} key={topOption.id}/>
  });

  return (
    <nav id="top-nav" role="navigation" className="top-nav">
      <ul className="menu-options">
        {topLevelNodes}
      </ul>
    </nav>
  );
}

export default Navigational;
