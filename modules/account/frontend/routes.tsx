import * as React from "react";
import { Route, IndexRoute, browserHistory } from 'react-router';

import ProfileContainer from "./containers/profile";
import OrdersContainer from "./containers/orders";
import SubscriptionsContainer from "./containers/subscriptions";
import SavedItemsContainer from "./containers/saved_items";
import MainContentsContainer from "./containers/main_contents";

const routes = <Route path="/account" component={MainContentsContainer}>
      <IndexRoute component={ProfileContainer} />
      <Route path="profile" component={ProfileContainer} />
      <Route path="orders" component={OrdersContainer} />
      <Route path="subscriptions" component={SubscriptionsContainer} />
      <Route path="saved-items" component={SavedItemsContainer} />
    </Route>

export default routes;
