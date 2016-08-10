import { RESET, SET_TYPE, SET_SIZE, SET_MATERIAL, SET_QUANTITY, CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY } from "../actions";

export interface StateObject {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
  updateComponents: string[];
}

const defaultState:StateObject = {
  updateComponents: []
}

const selectionState = (state = defaultState, action:{type: string, value?: string}): StateObject => {
  let {type, value} = action;

  switch (action.type) {
    case RESET:
      return {updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]};
    case SET_TYPE:
      return {
        type: action.value,
        size: undefined,
        material: undefined,
        quantity: undefined,
        updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      }
    case SET_SIZE:
      return Object.assign({}, state, {
        size: action.value,
        updateComponents: [CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      })
    case SET_MATERIAL:
      return Object.assign({}, state, {
        material: action.value,
        updateComponents: [CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      })
    case SET_QUANTITY:
      return  Object.assign({}, state, {
        quantity: action.value,
        updateComponents: [CATEGORY_QUANTITY]
      })
    default:
      return state;
  }
}

export default selectionState;
