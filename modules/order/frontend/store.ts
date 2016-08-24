import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux';

import orderApp from "./reducers";

const configureStore = (history: any, initialState?: any) => {
  const orderStore = createStore(
    orderApp,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )

  return orderStore;
}

export default configureStore;
