import * as React from "react";
import { Route, IndexRoute, browserHistory } from 'react-router';

import MainContents from "./components/main_contents";
import Category from "./containers/category";
import Stationary from "./print_types/stationary/main";
import VisitingCard from "./print_types/visiting_card/main";
import Broucher from "./print_types/broucher/main";

const routes = <Route path="/order" component={MainContents}>
      <IndexRoute component={Category} />
      <Route path="/order/stationary-*" component={Stationary} />
      <Route path="/order/visiting-card*" component={VisitingCard} />
      <Route path="/order/broucher-*" component={Broucher} />
    </Route>

export default routes;
