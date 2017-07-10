import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux"
import { ServerRouter, createServerRenderContext } from "react-router"

import MainContents from "./frontend/components/main_contents"
import createStore from "./frontend/store"
import CreateApp from "./frontend/components/app"

const ReactComponent = ({location}, cb) => {
  let initialPayload = {}
  let err = null

  const context = createServerRenderContext()

  // Create a new Redux store instance
  const store = createStore(initialPayload)

  let reactHTML = renderToString(
    <Provider store={store}>
      <ServerRouter location={location} context={context}>
        <CreateApp location={location} />
      </ServerRouter>
    </Provider>
  )

  const result = context.getResult()

  if (result.redirect) {
    err = {reason: 'redirect', location: '/'}
    return cb(err)
  } else {
    if (result.missed) {
      reactHTML = renderToString(
        <Provider store={store}>
          <ServerRouter location={location} context={context}>
            <CreateApp location={location} />
          </ServerRouter>
        </Provider>
      )

      err = {reason: 'missed'}
    }
  }
  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  cb(err, reactHTML, preloadedState)
}

export default ReactComponent
