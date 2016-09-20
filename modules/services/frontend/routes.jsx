import React from "react"
import { Route, IndexRoute, browserHistory } from 'react-router'

import MainContents from "./components/main_contents"
import Services from "./components/services"
import Stationary from "./components/stationary"
import InvitationCard from "./components/invitation_card"
import VisitingCard from "./components/visiting_card"

const routes = <Route path="/services" component={MainContents}>
      <IndexRoute component={Services} />
      <Route path="stationary" component={Stationary} />
      <Route path="invitation-card" component={InvitationCard} />
      <Route path="visiting-card" component={VisitingCard} />
    </Route>

export default routes
