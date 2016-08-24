import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux';

import checkoutApp from "./reducers";

const configureStore = (history: any, initialState?: any) => {
  const checkoutStore = createStore(
    checkoutApp,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )

  return checkoutStore;
}

export default configureStore;
