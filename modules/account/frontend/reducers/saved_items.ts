import { UPDATE_ALL} from "../actions";

const defaultSavedItemState = {
  loaded: false
}

const savedItemsState = (state: any = defaultSavedItemState, {type, details}: {type: string, details?: any}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details.savedItems);
    default:
      return state;
  }

}

export default savedItemsState;
