import * as Action_Items from "../actions";
let { RESET, SET_TYPE, SET_SIZE, SET_SURFACE, SET_COAT, SET_QUANTITY, SET_FILES} = Action_Items;
let { TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY, CATEGORY_FILES } = Action_Items;

const defaultState = {
  files: [],
  updateComponents: []
}

const selectionState = (state = defaultState, action) => {
  let {type, value} = action;
  let newState = state;

  switch (type) {
    case RESET:
      newState = {files: [], updateComponents: [TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY, CATEGORY_FILES]};
      break;
    case SET_TYPE:
      newState = Object.assign({}, state, {
        size: undefined,
        material: undefined,
        coat: undefined,
        quantity: undefined,
        files: [],
        updateComponents: [TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY, CATEGORY_FILES]
      });
      break;
    case SET_SIZE:
      newState = Object.assign({}, state, {
        size: value,
        material: undefined,
        coat: undefined,
        quantity: undefined,
        updateComponents: [TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY]
      });
      break;
    case SET_SURFACE:
      newState = Object.assign({}, state, {
        material: value,
        coat: undefined,
        quantity: undefined,
        updateComponents: [TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY]
      });
      break;
    case SET_COAT:
      newState = Object.assign({}, state, {
        coat: value,
        updateComponents: [TYPE_COAT, TYPE_QUANTITY]
      });
      break;
    case SET_QUANTITY:
      newState =  Object.assign({}, state, {
        quantity: value,
        updateComponents: [TYPE_QUANTITY]
      });
      break;
    case SET_FILES:
      newState =  Object.assign({}, state, {
        files: value,
        updateComponents: [CATEGORY_FILES]
      });
      break;
    default:
      return state;
  }

  return newState;
}

export default selectionState;
