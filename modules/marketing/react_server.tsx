import * as React from "react";
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
import { RouterContext, RouterState } from "react-router";
import { ReactRouterReduxHistory } from "react-router-redux";
(React as any).__spread = Object.assign;

import MainContents from "./frontend/components/main_contents";
import createStore from "./frontend/store";

interface RenderProps extends RouterState {
  router: any,
  createElement: any
}

const ReactComponent = (renderProps: RenderProps, history: ReactRouterReduxHistory) => {
  let initialPayload = {};

  // Create a new Redux store instance
  const store = createStore(history, initialPayload);

  // Render the component to a string
  const reactHTML = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  return { reactHTML, preloadedState};
}

export default ReactComponent;
