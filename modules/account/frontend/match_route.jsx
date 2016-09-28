import React from 'react'
import Match from 'react-router/Match'

const MatchWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default MatchWithSubRoutes;
