import * as Action_Items from "../actions";
let { RESET, SET_TYPE, SET_PRELOAD} = Action_Items;
let {CATEGORY_TYPE } = Action_Items;

export interface SelectionStateObject {
  type?: string;
  updateComponents?: string[];
  preloaded?: boolean;
}

const defaultState:SelectionStateObject = {
  updateComponents: [],
  preloaded: false
}

const typeState = (state = defaultState, {type, value}: {type: string, value?: string}): SelectionStateObject => {
  let newState: SelectionStateObject = state;

  switch (type) {
    case RESET:
      if(state.preloaded) break;
      newState = {type: undefined, updateComponents: [CATEGORY_TYPE]};
      break;
    case SET_TYPE:
      newState = Object.assign({}, state, {
        type: value
      });
      break;
    case SET_PRELOAD: {
      newState = Object.assign({}, state, {
        preloaded: true
      });
      break;
    }
  }

  return newState;
}

export default typeState;
