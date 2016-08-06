import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainContents } from "./main_contents";
import { createStore } from "redux";
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
