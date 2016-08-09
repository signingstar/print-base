//Action Types
export const RESET = 'RESET';
export const SET_TYPE = 'SET_TYPE';
export const SET_SIZE = 'SET_SIZE';
export const SET_MATERIAL = 'SET_MATERIAL';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const resetAll = () => {
  return {
    type: RESET
  };
}

export const selectType = (id: string) => {
  return {
    type: SET_TYPE,
    value: id
  };
}

export const selectSize = (id: string) => {
  return {
    type: SET_SIZE,
    value: id
  };
}

export const selectMaterial = (id: string) => {
  return {
    type: SET_MATERIAL,
    value: id
  };
}

export const selectQuantity = (id: string) => {
  return {
    type: SET_QUANTITY,
    value: id
  };
}

export const setVisibilityFilter = (filter: string, category:string) => {
  return {
    type: SET_VISIBILITY_FILTER,
    category,
    filter
  }
}
