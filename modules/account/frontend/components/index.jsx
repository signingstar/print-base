import React from "react"
import { render } from "react-dom"
import { Provider as StoreProvider } from "react-redux"
import { StaticRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import History from 'react-history/History'
import { trigger } from 'redial'
import { matchRoutesToLocation } from 'react-router-addons-routes';

import configureStore from "../store"
import routes from "../routes"
import App from "../containers/main_contents"

let preloadedState = window.__PRELOADED_STATE__

const rootElem = document.getElementById('main-contents')
const store = configureStore(preloadedState)

const createHistory = (...args) => {
  const history = createBrowserHistory(...args)

  return history
}

const renderDom = () => {
  render(
    <StoreProvider store={store}>
      <History createHistory={createHistory}>
        {({ history, action, location }) => (
          <StaticRouter
            action={action}
            location={location}
            onPush={history.push}
            onReplace={history.replace}
            blockTransitions={history.block}>
            <App location={location} />
          </StaticRouter>
        )}
      </History>
    </StoreProvider>,
    rootElem
  )
}

renderDom()
store.subscribe(renderDom)
