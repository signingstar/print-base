import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider as StoreProvider } from "react-redux"
import { ServerRouter, createServerRenderContext } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"
import { matchRoutesToLocation } from 'react-router-addons-routes';
import { trigger } from 'redial'

import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"
import App from "./frontend/components/app"
import routes from "./frontend/routes"

const mapUrlToState = (category = '') => {
  switch(category) {
    case '':
    case 'profile':
      return {
        profileState : {loaded: true, name: AccountDetails['profile'].name}
      }
    case 'subscriptions':
      return {
        subscriptionsState : {loaded: true, subscription: AccountDetails['subscriptions'].subscription}
      }
    case 'orders':
      return {
        ordersState : {loaded: true, count: AccountDetails['orders'].count}
      }
    case 'saved-items':
      return {
        savedItemsState : {loaded: true, savedItem: AccountDetails['saved-items'].savedItem}
      }
  }
}


const ReactComponent = (path, category, cb) => {
  let initialPayload = mapUrlToState(category)
  console.log(`initialPayload:${JSON.stringify(initialPayload)}`)
  // Create a new Redux store instance
  const store = createStore(initialPayload)

  const context = createServerRenderContext();

  const matchedRoutes = matchRoutesToLocation(routes, { pathname: path })
  const components = matchedRoutes.map(route => route.component)
  const { dispatch } = store
  const locals = { dispatch }

      // Render the component to a string
      const reactHTML = renderToString(
        <StoreProvider store={store}>
          <ServerRouter location={path} context={context}>
            <App />
          </ServerRouter>
        </StoreProvider>
      )

      // Grab the initial state from our Redux store
      const preloadedState = store.getState()

      cb(null, reactHTML, preloadedState)
}

export default ReactComponent
