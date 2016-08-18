import * as Action_Items from "../actions";

const defaultOrderState = {
}

const ordersState = (state: any = defaultOrderState, action: {type: string, value?: string}) => {
  let {type, value} = action;

  switch (action.type) {
    default:
      return state;
  }

}

export default ordersState;
