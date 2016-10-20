import { UPDATE_ALL, SET_ORDERS } from "../actions"

const ordersState = (state = [], {type, params}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, params['orders'])

    case SET_ORDERS:
      return params

    default:
      return state
  }

}

export default ordersState
