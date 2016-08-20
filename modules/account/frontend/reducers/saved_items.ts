import * as Action_Items from "../actions";

const defaultSavedItemState = {
  loaded: false
}

const savedItemsState = (state: any = defaultSavedItemState, action: {type: string, value?: string}) => {
  let {type, value} = action;

  switch (action.type) {
    default:
      return state;
  }

}

export default savedItemsState;
