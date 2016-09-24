import React from "react"
import { MatchWithRoutes } from 'react-router-addons-routes'

import Navigation from "./section_links"

const Root = ({ routes }) => (
  <section>
    <Navigation />
    <div className='account-items'>
      { routes.map((route, i) => <MatchWithRoutes key={i} {...route} />) }
    </div>
  </section>
)

export default Root
