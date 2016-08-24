import { UPDATE_ALL} from "../actions";

const defaultOrderState = {
  loaded: false
}

const cartState = (state: any = defaultOrderState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['cart']);
    default:
      return state;
  }

}

export default cartState;
