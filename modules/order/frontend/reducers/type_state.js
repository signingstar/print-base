import { TYPE_CATEGORY, RESET, SET_TYPE, SET_PRELOAD} from "../actions";

const defaultState = {
  updateComponents: [],
  preloaded: false
}

const typeState = (state = defaultState, {type, value}) => {
  let newState: SelectionStateObject = state;

  // console.log(`type:${type} | state:${JSON.stringify(newState)}`);

  switch (type) {
    case RESET:
      if(state.preloaded) break;
      newState = {type: undefined, updateComponents: [TYPE_CATEGORY]};
      break;
    case SET_TYPE:
      newState = Object.assign({}, state, {
        type: value,
        updateComponents: [TYPE_CATEGORY]
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
