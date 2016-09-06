import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux';

import servicesApp from "./reducers";

const configureStore = (history, initialState?) => {
  const servicesStore = createStore(
    servicesApp,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )

  return servicesStore;
}

export default configureStore;
