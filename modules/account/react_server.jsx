import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux"
import { RouterContext, RouterState } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"

import MainContents from "./frontend/components/main_contents"
import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"

interface RenderProps extends RouterState {
  router: any,
  createElement: any
}

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

const ReactComponent = (renderProps, category, history) => {
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

  return { reactHTML, preloadedState}
}

export default ReactComponent
