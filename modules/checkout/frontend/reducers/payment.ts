import { UPDATE_ALL} from "../actions";

const defaultSubscriptionState = {
  loaded: false
}

const paymentState = (state: any = defaultSubscriptionState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['payment']);
    default:
      return state;
  }

}

export default paymentState;
