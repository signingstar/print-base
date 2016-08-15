import "core-js/shim";
import { combineReducers } from "redux";

import selectionState from "./selection_state";

const printApp = combineReducers({
  selectionState
})

export default printApp
