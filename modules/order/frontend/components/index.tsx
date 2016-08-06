import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";

import { MainContents } from "./main_contents";
import printState from "../reducers";

const store = createStore(printState);
const rootElem = document.getElementById('main-contents');

function render() {
  ReactDOM.render(
    <MainContents store={store} />, rootElem
  );
}

render();
store.subscribe(render);
