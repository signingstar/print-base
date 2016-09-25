import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux"
import { createMemoryHistory, match, RouterContext, RouterState } from "react-router"
import { ReactRouterReduxHistory, syncHistoryWithStore } from "react-router-redux"

import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"
import routes from "./frontend/routes"
let debug = require("debug")('Account:react_server')

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

const ReactComponent = (location, category, cb) => {
  let err = null

  const memoryHistory = createMemoryHistory(location)
  const store = createStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({routes, location, history}, (error, redirectLocation, renderProps) => {
    debug(`error:${error} | renderProps:${renderProps}`)
    if(renderProps) {

      let initialPayload = mapUrlToState(category)

      // Create a new Redux store instance
      const store = createStore(history, initialPayload)

      // Render the component to a string
      const reactHTML = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      // Grab the initial state from our Redux store
      const preloadedState = store.getState()

      return cb(err, reactHTML, preloadedState)
    } else if (redirectLocation) {
      err = {code: 302, redirectLocation}
    } else {
      err = {code: 404}
    }

    cb(err);
  })
}

export default ReactComponent
