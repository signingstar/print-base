import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainContents from "./main_contents";
import configureStore from "../store";
import MyWindow from "../data_types/my_window";
import routes from "../routes";

declare var window: MyWindow;

let preloadedState = window.__PRELOADED_STATE__;

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
