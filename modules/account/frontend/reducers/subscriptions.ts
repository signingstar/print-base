import { UPDATE_ALL} from "../actions";

const defaultSubscriptionState = {
  loaded: false
}

const subscriptionsState = (state: any = defaultSubscriptionState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['subscriptions']);
    default:
      return state;
  }

}

export default subscriptionsState;
