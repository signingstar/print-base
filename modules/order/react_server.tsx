import * as React from "react";
import { renderToString } from 'react-dom/server'
import { createStore } from "redux";
import { Provider } from "react-redux";

import { CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY } from "./frontend/actions";
import MainContents from "./frontend//components/main_contents";
import printApp from "./frontend/reducers";

const ReactComponent = (item: string) => {

  let initialPayload = {
    selectionState: {
      type: item,
      updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]
    }
  }
  // Create a new Redux store instance
  const store = createStore(printApp, initialPayload);

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
