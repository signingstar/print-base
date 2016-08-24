//Action Types
export const RESET = 'RESET';
export const SET_TYPE = 'SET_TYPE';
export const SET_SIZE = 'SET_SIZE';
export const SET_SURFACE = 'SET_SURFACE';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_FILES = 'SET_FILES';
export const SET_COAT = 'SET_COAT';
export const SET_PRELOAD = 'SET_PRELOAD';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const CATEGORY_TYPE = 'type';
export const CATEGORY_SIZE = 'size';
export const CATEGORY_SURFACE = 'material';
export const CATEGORY_COAT = 'coat';
export const CATEGORY_QUANTITY = 'quantity';
export const CATEGORY_FILES = 'files';


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

export const selectSurface = (id: string) => {
  return {
    type: SET_SURFACE,
    value: id
  };
}

export const selectCoat = (id: string) => {
  return {
    type: SET_COAT,
    value: id
  };
}

export const selectQuantity = (id: string) => {
  return {
    type: SET_QUANTITY,
    value: id
  };
}

export const setFiles = (files: File[]) => {
  return {
    type: SET_FILES,
    value: files
  };
}

export const updateCategories = (category:string) => {
  return {
    type: UPDATE_CATEGORIES,
    category
  }
}

export const setPreload = (category: string) => {
  return {
    type: SET_PRELOAD,
    category
  }
}
