import * as Action_Items from "../actions";

const defaultProfileState = {
}

const profileState = (state: any = defaultProfileState, action: {type: string, value?: string}) => {
  let {type, value} = action;

  switch (action.type) {
    default:
      return state;
  }

}

export default profileState;
