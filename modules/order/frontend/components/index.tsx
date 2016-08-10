import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import MainContents from "./main_contents";
import printApp from "../reducers";
import MyWindow from "../data_types/my_window";

declare var window: MyWindow;

let preloadedState = window.__PRELOADED_STATE__;
const store = createStore(printApp, preloadedState);
const rootElem = document.getElementById('main-contents');

function render() {
  ReactDOM.render(
    <Provider store={store} ><MainContents /></Provider>, rootElem
  );
}

render();
store.subscribe(render);
