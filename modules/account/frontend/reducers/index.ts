import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import profileState from "./profile";
import ordersState from "./orders";
import savedItemsState from "./saved_items";
import subscriptionsState from "./subscriptions";

const accountApp = combineReducers({
  profileState,
  ordersState,
  savedItemsState,
  subscriptionsState,
  routing: routerReducer
})

export default accountApp
