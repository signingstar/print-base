import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider as StoreProvider } from "react-redux"
import { ServerRouter, createServerRenderContext } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"

import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"
import App from "./frontend/containers/main_contents"

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

  // Create a new Redux store instance
  const store = createStore(initialPayload)
  const context = createServerRenderContext();
  let err = null

  // Render the component to a string
  let reactHTML = renderToString(
    <StoreProvider store={store}>
      <ServerRouter location={path} context={context}>
        <App location={path} />
      </ServerRouter>
    </StoreProvider>
  )

  const result = context.getResult()

  if (result.redirect) {
    err = {reason: 'redirect', location: result.redirect.pathname}
    cb(err)
  } else {
    if (result.missed) {
      reactHTML = renderToString(
        <StoreProvider store={store}>
          <ServerRouter location={path} context={context}>
            <App location={path} />
          </ServerRouter>
        </StoreProvider>
      )

      err = {reason: 'missed'}
    }
  }
  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  cb(err, reactHTML, preloadedState)
}

export default ReactComponent
