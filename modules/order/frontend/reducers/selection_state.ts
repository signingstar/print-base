import { RESET, SET_TYPE, SET_SIZE, SET_MATERIAL, SET_QUANTITY, CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY } from "../actions";

export interface SelectionStateObject {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
  updateComponents: string[];
}

const defaultState:SelectionStateObject = {
  updateComponents: []
}

const selectionState = (state = defaultState, action:{type: string, value?: string}): SelectionStateObject => {
  let {type, value} = action;

  // console.log(`type:${type} | value:${value} | Old state: ${JSON.stringify(state)}`);
  let newState: SelectionStateObject = state;

  switch (action.type) {
    case RESET:
      newState = {updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]};
      break;
    case SET_TYPE:
      newState = {
        type: action.value,
        size: undefined,
        material: undefined,
        quantity: undefined,
        updateComponents: [CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      };
      break;
    case SET_SIZE:
      newState = Object.assign({}, state, {
        size: action.value,
        material: undefined,
        quantity: undefined,
        updateComponents: [CATEGORY_SIZE, CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      });
      break;
    case SET_MATERIAL:
      newState = Object.assign({}, state, {
        material: action.value,
        quantity: undefined,
        updateComponents: [CATEGORY_MATERIAL, CATEGORY_QUANTITY]
      });
      break;
    case SET_QUANTITY:
      newState =  Object.assign({}, state, {
        quantity: action.value,
        updateComponents: [CATEGORY_QUANTITY]
      });
      break;
  }

  // console.log(`New state: ${JSON.stringify(newState)}`);
  return newState;
}

export default selectionState;
