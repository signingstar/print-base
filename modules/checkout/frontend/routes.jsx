import React from "react"
import { Route, IndexRoute, browserHistory } from 'react-router'

import AddressContainer from "./containers/address"
import CartContainer from "./containers/cart"
import PaymentContainer from "./containers/payment"
import MainContentsContainer from "./containers/main_contents"

const routes = <Route path="/checkout" component={MainContentsContainer}>
      <IndexRoute component={CartContainer} />
      <Route path="address" component={AddressContainer} />
      <Route path="cart" component={CartContainer} />
      <Route path="payment" component={PaymentContainer} />
    </Route>

export default routes
