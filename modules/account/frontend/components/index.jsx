import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { StaticRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import History from 'react-history/History'
import Router from 'react-router/BrowserRouter'
import BrowserHistory from 'react-history/BrowserHistory'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import configureStore from "../store"
import App from "../containers/main_contents"
import Navigation from "./navigation"
import Profile from "../containers/profile"
import Orders from "../containers/orders"
let preloadedState = window.__PRELOADED_STATE__

const rootElem = document.getElementById('main-contents')
const store = configureStore(preloadedState)

const createHistory = (...args) => {
  const history = createBrowserHistory(...args)

  return history
}

const renderDom = () => {
  render(
    <Provider store={store}>
      <Router>
        {({router}) => (
          <section>
            <Navigation router={router}/>
            <Match pattern="/account/profile" component={Profile} />
            <Match exactly pattern="/account/orders" component={Orders} />
            <Miss component={()=> <div>Not Found</div>} />
          </section>
        )}
      </Router>
    </Provider>,
    rootElem
  )
}

renderDom()
store.subscribe(renderDom)
