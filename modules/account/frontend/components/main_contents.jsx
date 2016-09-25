import React from "react"
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import Navigation from "./navigation"
import Profile from "../containers/profile"
import Orders from "../containers/orders"
import Subscriptions from "../containers/subscriptions"
import SavedItems from "../containers/saved_items"

const Root = () => (
  <section>
    <Navigation />
    <Match pattern="/account/profile" component={Profile} />
    <Match pattern="/account/orders" component={Orders} />
    <Match pattern="/account/subscriptions" component={Subscriptions} />
    <Match pattern="/account/saved-items" component={SavedItems} />
    <Miss component={()=> <div>Not Found</div>} />
  </section>
)

export default Root
