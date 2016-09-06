import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import servicesState from "./services";

const accountApp = combineReducers({
  servicesState,
  routing: routerReducer
})

export default accountApp
