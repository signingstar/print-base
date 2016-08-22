import { UPDATE_ALL} from "../actions";

const defaultOrderState = {
  loaded: false
}

const ordersState = (state: any = defaultOrderState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['orders']);
    default:
      return state;
  }

}

export default ordersState;
