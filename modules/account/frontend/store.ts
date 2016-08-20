import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux';

import accountApp from "./reducers";

const configureStore = (history: any, initialState?: any) => {
  const accountStore = createStore(
    accountApp,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )

  return accountStore;
}

export default configureStore;
