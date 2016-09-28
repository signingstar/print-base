import async from "async"
import React from "react"
import { renderToString } from 'react-dom/server'
import { Provider as StoreProvider } from "react-redux"
import { ServerRouter, createServerRenderContext } from "react-router"
import { ReactRouterReduxHistory } from "react-router-redux"

import getUserDetails from "./database/api/getUserDetails"
import getUserAddress from "./database/api/getUserAddress"
import createStore from "./frontend/store"
import AccountDetails from "./mock_data/details"
import App from "./frontend/containers/main_contents"

const updateStoreWithInfo = (data, category='') => {
  let state = {}
  for(let category in data) {
    switch(category) {
      case 'order':
        state['ordersState'] = data[category]
        break;
      case 'profile':
        state['profileState'] = {data: data[category]}
    }
  }

  return state

}

const ReactComponent = ({location, category, userid}, {logger, queryDb}, cb) => {

  // Create a new Redux store instance
  let err = null

  async.waterfall(
    [
      (done) => {
        async.parallel({
          profile: (cb) => {
            getUserDetails([userid], {logger, queryDb}, (err, user) => {
              cb(err, user)
            })
          },
          order: (cb) => {
            const ordersState = {loaded: true, count: 6}
            cb(err, ordersState)
          }
        },
        (err, results) => {
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
