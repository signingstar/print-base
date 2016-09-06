import { UPDATE_ALL} from "../actions";

const defaultProfileState = {
  loaded: false
}

const profileState = (state = defaultProfileState, {type, details}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['profile']);
    default:
      return state;
  }

}

export default profileState;
