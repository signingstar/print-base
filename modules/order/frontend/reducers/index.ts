export interface StateObject {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
}

export default function printState(state: StateObject = {}, action:{type: string, key: string, val: string}) {
  switch (action.type) {
    case 'clear':
      return {};
    case 'set':
      switch(action.key) {
        case 'type':
          return {
            type: action.val,
            size: '',
            material: '',
            quantity: ''
          }
        case 'size':
          return {
            type: state.type,
            size: action.val,
            material: state.material,
            quantity: state.quantity
          }
        case 'quantity':
          return {
            type: state.type,
            size: state.size,
            material: state.material,
            quantity: action.val
          }
        case 'material':
          return {
            type: state.type,
            size: state.size,
            material: action.val,
            quantity: state.quantity
          }
      }
    default:
      return state;
  }
}
