import { UPDATE_ALL} from "../actions";

const defaultOrderState = {
  loaded: false
}

const cartState = (state = defaultOrderState, {type, details}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['cart']);
    default:
      return state;
  }

}

export default cartState;
