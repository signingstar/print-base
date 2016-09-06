import "core-js/shim";
import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import selectionState from "./selection_state";
import typeState from "./type_state";

const orderApp = combineReducers({
  selectionState,
  typeState,
  routing: routerReducer
})

export default orderApp
