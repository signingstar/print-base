import { UPDATE_ALL} from "../actions"

const defaultSavedItemState = {
  loaded: false
}

const savedItemsState = (state = defaultSavedItemState, {type, details}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['saved-items'])
    default:
      return state
  }

}

export default savedItemsState
