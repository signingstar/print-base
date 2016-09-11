import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { isEmpty, keys } from "underscore";

import configureStore from "../store";
import routes from "../routes";

let preloadedState = window.__PRELOADED_STATE__;

let sessionStoreStr = sessionStorage.getItem('orderApp');
if((!preloadedState || keys(preloadedState.selectionState).length < 3) && sessionStoreStr) {
  let sessionStore = JSON.parse(sessionStoreStr);
  preloadedState = preloadedState.categoryState.type? sessionStore : preloadedState;
}

const rootElem = document.getElementById('main-contents');
const store = configureStore(browserHistory, preloadedState);
const history = syncHistoryWithStore(browserHistory, store);

function renderDom() {
  render(
    <Provider store={store} ><Router routes={routes} history={history} /></Provider>, rootElem
  );
}

renderDom();
store.subscribe(renderDom);
