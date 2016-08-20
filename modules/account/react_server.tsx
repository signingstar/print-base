import * as React from "react";
import { renderToString } from 'react-dom/server';
import { Provider } from "react-redux";
import { RouterContext, RouterState } from "react-router";
import { ReactRouterReduxHistory } from "react-router-redux";
(React as any).__spread = Object.assign;

import MainContents from "./frontend/components/main_contents";
import createStore from "./frontend/store";
import AccountDetails from "./mock_data/details";
import { mapUrlPathToInternalCategory } from "./helper";

interface RenderProps extends RouterState {
  router: any,
  createElement: any
}

const mapUrlToState = (category: string = '') => {
  let activeState: string = mapUrlPathToInternalCategory(category);
  let loadedState: {key: string, value: any} = undefined;

  console.log(`activeState:${activeState}`);
  switch(category) {
    case '':
    case 'profile':
      loadedState = { key: 'profileState', value: {loaded: true, name: AccountDetails.profile.name}};
      break;
    case 'subscriptions':
      loadedState = { key: 'subscriptionsState', value: {loaded: true, subscription: AccountDetails.subscriptions.subscription}};
      break;
    case 'orders':
      loadedState = { key: 'ordersState', value: {loaded: true, count: AccountDetails.orders.count}};
      break;
    case 'saved-items':
      loadedState = { key: 'savedItemsState', value: {loaded: true, savedItem: AccountDetails.savedItems.savedItem}};
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
