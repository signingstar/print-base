import async from "async"
import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider as StoreProvider } from "react-redux"
import { ServerRouter, createServerRenderContext } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"

import createStore from "./frontend/store"
import App from "./frontend/components/app"
import RequestBuilder from "./request_builder"

const updateStoreWithInfo = (data) => {
  let state = {}
  for(let category in data) {
    switch(category) {
      case '':
      case 'profile':
        state['profileState'] = {data: data[category]}
        break;
      case 'order':
        state['ordersState'] = data[category]
        break;
      case 'address':
        state['profileState'] = {address: data[category]}
        break;
    }
  }

  return state
}

const ReactComponent = ({location, category, userid}, {logger, queryDb}, cb) => {

  // Create a new Redux store instance
  let err = null
  const requests = RequestBuilder({location, category, userid}, {logger, queryDb})

  async.waterfall(
    [
      (done) => {
        async.parallel(requests, (err, results) => {
          done(err, results)
        })
      },
      (results, done) => {
        let initialPayload = updateStoreWithInfo(results)
        const context = createServerRenderContext();
        // Create a new Redux store instance
        const store = createStore(initialPayload)

        let reactHTML = renderToString(
          <StoreProvider store={store}>
            <ServerRouter location={location} context={context}>
              <App location={location} />
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
                <ServerRouter location={location} context={context}>
                  <App location={location} />
                </ServerRouter>
              </StoreProvider>
            )

            err = {reason: 'missed'}
          }
        }
        // Grab the initial state from our Redux store
        const preloadedState = store.getState()

        cb(err, reactHTML, preloadedState)

          // done(err, 'done') Will commenting this result in any memory leak!!!!
      }
    ], (err) => {
      cb(err)
    }
  )
}

export default ReactComponent
