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

const mapUrlToState = (category: string) => {
  let activeState: string = undefined;
  let loadedState: {key: string, value: any} = undefined;

  switch(category) {
    case 'profile':
      activeState = 'profile';
      loadedState = { key: 'profileState', value: {loaded: true}};
      break;
    case 'subscriptions':
      activeState = 'subscriptions';
      loadedState = { key: 'subscriptionState', value: {loaded: true}};
      break;
    case 'orders':
      activeState = 'orders';
      loadedState = { key: 'ordersState', value: {loaded: true}};
      break;
    case 'saved_items':
      activeState = 'savedItems';
      loadedState = { key: 'savedItemsState', value: {loaded: true}};
      break;
  }


  let retValue:{[key: string]: any} = {
    menuState: {active: activeState},
  };

  if(loadedState) {
    let {key, value} = loadedState;
    retValue[key] = value;
  }

  return retValue;
}

const ReactComponent = (renderProps: RenderProps, category: string, history: ReactRouterReduxHistory) => {
  let initialPayload = mapUrlToState(category)
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
