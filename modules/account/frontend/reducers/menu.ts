import { SET_TOP_NAV } from "../actions";

const defaultMenuState = {
  active: 'profile'
}

const menuState = (state: any = defaultMenuState, {type, value}: {type: string, value?: string}) => {
  console.log(`type: ${type} | value: ${value}`);

  switch (type) {
    case SET_TOP_NAV:
      return {
        active: value
      }
    default:
      return state;
  }

}

export default menuState;
