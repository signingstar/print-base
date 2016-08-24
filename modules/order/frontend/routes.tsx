import * as React from "react";
import { Route, IndexRoute, browserHistory } from 'react-router';

import MainContents from "./components/main_contents";
import DefaultCategory from "./components/default_category";
import PrintType from "./containers/types_item_box";

const routes = <Route path="/order" component={MainContents}>
      <IndexRoute component={PrintType} />
      <Route path="/order/:category" component={DefaultCategory} />
    </Route>

export default routes;
