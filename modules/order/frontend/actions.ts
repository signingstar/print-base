//Action Types
export const RESET = 'RESET';
export const SET_TYPE = 'SET_TYPE';
export const SET_SIZE = 'SET_SIZE';
export const SET_MATERIAL = 'SET_MATERIAL';
export const SET_QUANTITY = 'SET_QUANTITY';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const CATEGORY_TYPE = 'type';
export const CATEGORY_SIZE = 'size';
export const CATEGORY_MATERIAL = 'material';
export const CATEGORY_QUANTITY = 'quantity';


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

export const updateCategories = (category:string) => {
  return {
    type: UPDATE_CATEGORIES,
    category
  }
}
