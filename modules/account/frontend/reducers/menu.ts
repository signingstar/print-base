import { LOCATION_CHANGE } from "../actions";
import { mapUrlPathToInternalCategory } from "../../helper"

const defaultMenuState = {
  active: 'profile'
}

const getActiveUrl = (path: string) => {
  let relativePath = path.lastIndexOf('/') > 0 ? path.slice(path.lastIndexOf('/') + 1) : '';
  return mapUrlPathToInternalCategory(relativePath);
};

const menuState = (state: any = defaultMenuState, {type, payload={}}: {type: string, payload?: any}) => {
  let {pathname} = payload;
  console.log(`type: ${type} | pathname: ${JSON.stringify(pathname)}`);

  switch (type) {
    case LOCATION_CHANGE:
      return {
        active: getActiveUrl(pathname)
      }
    default:
      return state;
  }

}

export default menuState;
