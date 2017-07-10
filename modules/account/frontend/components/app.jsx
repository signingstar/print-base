import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Navigation from "./navigation_top"
import AccountDetails from "../containers/account_details"
import Orders from "../containers/orders"

const App = () => (
  <section>
    <Router>
      <Switch>
        <Navigation />
        <Route path="/account" component={AccountDetails} />
        <Route exact path="/myorders" component={Orders} />
        <Route component={()=> <div>Not Found</div>} />
      </Switch>
    </Router>
  </section>
)

export default App
