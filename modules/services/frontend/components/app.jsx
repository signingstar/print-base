import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import MainContents from "./main_contents"
import Services from "./services"
import Stationary from "./stationary"
import InvitationCard from "./invitation_card"
import VisitingCard from "./visiting_card"

const App = () => (
  <Router>
    <Switch>
      <div className='main-section-content'>
        <Route path="/services" component={MainContents} />
        <Route exact path="/services/stationary" component={Stationary} />
        <Route exact path="/services/invitation-card" component={InvitationCard} />
        <Route exact path="/services/visiting-card" component={VisitingCard} />
        <Route component={()=> <div>Not Found</div>} />
      </div>
    </Switch>
  </Router>
)

export default App
