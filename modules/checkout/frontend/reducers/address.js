import { UPDATE_ALL} from "../actions"

const defaultProfileState = {
  loaded: false
}

const addressState = (state = defaultProfileState, {type, details}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['address'])
    default:
      return state
  }

}

export default addressState
