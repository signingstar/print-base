import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import addressState from "./address"
import cartState from "./cart"
import paymentState from "./payment"

const checkoutApp = combineReducers({
  addressState,
  cartState,
  paymentState,
  routing: routerReducer
})

export default checkoutApp
