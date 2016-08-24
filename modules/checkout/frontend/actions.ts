//Action Types
export const UPDATE_ALL = 'UPDATE_ALL';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const updateAllStates = (details: any) => {
  return {
    type: UPDATE_ALL,
    details
  };
}
