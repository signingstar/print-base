//Action Types
export const UPDATE_ALL = 'UPDATE_ALL'
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export const updateAllStates = (details) => {
  return {
    type: UPDATE_ALL,
    details
  }
}
