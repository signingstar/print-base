import React from 'react'
import { RoutesProvider, MatchWithRoutes } from 'react-router-addons-routes'

import routes from '../routes'

const App = () => (
  <RoutesProvider routes={routes}>
    <div>
      { routes.map((route, i) => <MatchWithRoutes key={i} {...route} />) }
    </div>
  </RoutesProvider>
)

export default App
