//Action Types
export const SET_PROFILE = 'SET_PROFILE';

export const setProfile = (id: string) => {
  return {
    type: SET_PROFILE,
    value: id
  };
}
