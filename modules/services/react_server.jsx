import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux"
import { StaticRouter } from "react-router"

import MainContents from "./frontend/components/main_contents"
import createStore from "./frontend/store"
import CreateApp from "./frontend/components/app"

const ReactComponent = ({location}, cb) => {
  let initialPayload = {}
  let err = null

  const context = {};

  // Create a new Redux store instance
  const store = createStore(initialPayload)

  let reactHTML = renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <CreateApp />
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    err = {reason: 'redirect', location: '/'}
    return cb(err)
  }
  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  cb(err, reactHTML, preloadedState)
}

export default ReactComponent
