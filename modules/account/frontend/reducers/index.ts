import { combineReducers } from "redux";

import menuState from "./menu";
import profileState from "./profile";
import ordersState from "./orders";
import savedItemsState from "./saved_items";
import subscriptionState from "./subscriptions";

const accountApp = combineReducers({
  menuState,
  profileState,
  ordersState,
  savedItemsState,
  subscriptionState
})

export default accountApp