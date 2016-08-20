import * as Action_Items from "../actions";

const defaultSubscriptionState = {
  loaded: false
}

const subscriptionState = (state: any = defaultSubscriptionState, action: {type: string, value?: string}) => {
  let {type, value} = action;

  switch (action.type) {
    default:
      return state;
  }

}

export default subscriptionState;
