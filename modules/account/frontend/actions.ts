//Action Types
export const SET_TOP_NAV = 'SET_TOP_NAV';

export const selectTopNav = (id: string) => {
  return {
    type: SET_TOP_NAV,
    value: id
  };
}
