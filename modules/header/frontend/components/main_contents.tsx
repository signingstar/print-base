import * as React from "react";

import PromotionalHeader from "./promotional_header";
import MainHeader from "./main_header";
import Navigational from "./navigational";

import {origConfig} from "../../presenter";

const MainContents = () => {
  return (
    <div>
      <PromotionalHeader />
      <MainHeader />
      <Navigational origConfig={origConfig}/>
    </div>
  );
}

export default MainContents;
