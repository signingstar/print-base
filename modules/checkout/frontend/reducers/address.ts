import { UPDATE_ALL} from "../actions";

const defaultProfileState = {
  loaded: false
}

const addressState = (state: any = defaultProfileState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['address']);
    default:
      return state;
  }

}

export default addressState;
