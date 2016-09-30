import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import profileState from "./profile"
import ordersState from "./orders"
import error from "./error"

const accountApp = combineReducers({
  profileState,
  ordersState,
  error,
  routing: routerReducer
})

export default accountApp
