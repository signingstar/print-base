import * as React from "react";
import { renderToString } from 'react-dom/server'
import { createStore } from "redux";
import { Provider } from "react-redux";

import { MainContents } from "./frontend//components/main_contents";
import printApp from "./frontend/reducers";

const ReactComponent = () => {
  // Create a new Redux store instance
  const store = createStore(printApp)

  // Render the component to a string
  const reactHTML = renderToString(
    <Provider store={store}>
      <MainContents />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  return { reactHTML, preloadedState};
}

export default ReactComponent;
