import { RESET, SET_TYPE, SET_SIZE, SET_MATERIAL, SET_QUANTITY} from "../actions";

interface StateObject {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
}

const selectionState = (state: StateObject = {}, action:{type: string, value?: string}): StateObject => {
  switch (action.type) {
    case RESET:
      return {};
    case SET_TYPE:
      return Object.assign({}, state, {
        type: action.value,
        size: undefined,
        material: undefined,
        quantity: undefined
      });
    case SET_SIZE:
      return {
        type: state.type,
        size: action.value,
        material: state.material,
        quantity: state.quantity
      }
    case SET_MATERIAL:
      return {
        type: state.type,
        size: state.size,
        material: action.value,
        quantity: state.quantity
      }
    case SET_QUANTITY:
      return {
        type: state.type,
        size: state.size,
        material: state.material,
        quantity: action.value
      }
    default:
      return state;
  }
}

export default selectionState;
