import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import profileState from "./profile"
import ordersState from "./orders"

const accountApp = combineReducers({
  profileState,
  ordersState,
  routing: routerReducer
})

export default accountApp
