import * as Action_Items from "../actions";

const profileState = (state: any= {}, action: {type: string, value?: string}) => {
  let {type, value} = action;

  switch (action.type) {
    default:
      return state;
  }

}

export default profileState;
