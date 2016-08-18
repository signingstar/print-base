import "core-js/shim";
import { combineReducers } from "redux";

import profileState from "./profile";

const accountApp = combineReducers({
  profileState
})

export default accountApp
