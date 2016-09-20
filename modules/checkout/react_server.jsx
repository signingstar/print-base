import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux"
import { RouterContext, RouterState } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"

import MainContents from "./frontend/components/main_contents"
import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"

const mapUrlToState = (category = '') => {
  switch(category) {
    case '':
    case 'address':
      return {
        addressState : {loaded: true, name: AccountDetails['address'].name}
      }
    case 'cart':
      return {
        cartState : {loaded: true, subscription: AccountDetails['cart'].subscription}
      }
    case 'payment':
      return {
        ordersState : {loaded: true, count: AccountDetails['payment'].count}
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
