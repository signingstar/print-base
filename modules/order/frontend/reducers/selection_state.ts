import * as Action_Items from "../actions";
let { RESET, SET_TYPE, SET_SIZE, SET_SURFACE, SET_COAT, SET_QUANTITY, SET_FILES} = Action_Items;
let {CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY, CATEGORY_FILES } = Action_Items;

export interface SelectionStateObject {
  type?: string;
  size?: string;
  material?: string;
  coat?: string;
  quantity?: string;
  files: File[];
  updateComponents: string[];
}

const defaultState:SelectionStateObject = {
  files: [],
  updateComponents: []
}

const selectionState = (state = defaultState, action:{type: string, value?: string}): SelectionStateObject => {
  let {type, value} = action;

  let newState: SelectionStateObject = state;

  switch (action.type) {
    case RESET:
      newState = {files: [], updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY, CATEGORY_FILES]};
      break;
    case SET_TYPE:
      newState = {
        type: action.value,
        size: undefined,
        material: undefined,
        coat: undefined,
        quantity: undefined,
        files: [],
        updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY, CATEGORY_FILES]
      };
      break;
    case SET_SIZE:
      newState = Object.assign({}, state, {
        size: action.value,
        material: undefined,
        coat: undefined,
        quantity: undefined,
        updateComponents: [CATEGORY_SIZE, CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY]
      });
      break;
    case SET_SURFACE:
      newState = Object.assign({}, state, {
        material: action.value,
        coat: undefined,
        quantity: undefined,
        updateComponents: [CATEGORY_SURFACE, CATEGORY_COAT, CATEGORY_QUANTITY]
      });
      break;
    case SET_COAT:
      newState = Object.assign({}, state, {
        coat: action.value,
        quantity: undefined,
        updateComponents: [CATEGORY_COAT, CATEGORY_QUANTITY]
      });
      break;
    case SET_QUANTITY:
      newState =  Object.assign({}, state, {
        quantity: action.value,
        updateComponents: [CATEGORY_QUANTITY]
      });
      break;
    case SET_FILES:
      newState =  Object.assign({}, state, {
        files: action.value,
        updateComponents: [CATEGORY_FILES]
      });
      break;
    default:
      return state;
  }

  return newState;
}

export default selectionState;
