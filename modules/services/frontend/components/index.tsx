import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainContents from "./main_contents";
import configureStore from "../store";
import MyWindow from "../data_types";
import routes from "../routes";

declare const window: MyWindow;

let preloadedState = window.__PRELOADED_STATE__;

const rootElem = document.getElementById('main-contents');
const store = configureStore(browserHistory, preloadedState);
const history = syncHistoryWithStore(browserHistory, store);

function renderDom() {
  console.log(`inside renderDom`);
  render(
    <Provider store={store} ><Router routes={routes} history={history} /></Provider>, rootElem
  );
}

renderDom();
store.subscribe(renderDom);
