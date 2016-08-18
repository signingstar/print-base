import * as React from "react";
import { renderToString } from 'react-dom/server';

import MainContents from "./frontend/components/main_contents";

const HeaderReactComponent = () => {

  // Render the component to a string
  const reactHeaderHTML = renderToString(<MainContents />);

  return { reactHeaderHTML };
}

export default HeaderReactComponent;
