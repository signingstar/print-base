import 'core-js/shim';
import { SET_VISIBILITY_FILTER } from "../actions";
import PrintData from "../../../../config/print_combination";

interface StateObject {
  size: string[];
  material: string[];
  quantity: string[];
}

interface ActionObject {
  type: string;
  category: string;
  filter: string;
}

const defaultStatesForType = {
  size: Object.keys(PrintData['size']),
  material:Object.keys(PrintData['material']),
  quantity: Object.keys(PrintData['quantity'])
}

const visibleStatesForType = (state: any, filter: string) => {
  let visibleState = Object.assign({}, defaultStatesForType);
  visibleState.size.filter(size => size === 'm-1');
  return visibleState;
}

const visibleStatesForSize = (state: any, filter: string) => {
  return defaultStatesForType;
}

const visibleStatesForMaterial = (state: any, filter: string) => {
  return defaultStatesForType;
}

const visibleStatesForQuantity = (state: any, filter: string) => {
  return defaultStatesForType;
}

const visibleStates = (state: StateObject = defaultStatesForType, action: ActionObject) => {
  let {type, category, filter} = action;

  switch (type) {
    case SET_VISIBILITY_FILTER:
      switch(category) {
        case 'type':
          return visibleStatesForType(state, filter);
        case 'size':
          return visibleStatesForSize(state, filter);
        case 'material':
          return visibleStatesForMaterial(state, filter);
        case 'quantity':
          return visibleStatesForQuantity(state, filter);
      }
    default:
      return defaultStatesForType;
  }
}

export default visibleStates;
