import React from "react"
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import Navigation from "./navigation_top"
import AccountDetails from "../containers/account_details"
import Orders from "../containers/orders"

const App = () => (
  <section>
    <Navigation />
    <Match pattern="/account/profile" component={AccountDetails} />
    <Match exactly pattern="/account/orders" component={Orders} />
    <Miss component={()=> <div>Not Found</div>} />
  </section>
)

export default App
