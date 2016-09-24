import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import { routerReducer, routerMiddleware } from 'react-router-redux'

import accountApp from "./reducers"

const configureStore = (initialState) => {
  const accountStore = createStore(
    accountApp,
    initialState
  )

  return accountStore
}

export default configureStore
