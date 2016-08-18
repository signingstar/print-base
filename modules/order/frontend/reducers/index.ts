import "core-js/shim";
import { combineReducers } from "redux";

import selectionState from "./selection_state";

const orderApp = combineReducers({
  selectionState
})

export default orderApp
