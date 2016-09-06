//Action Types
export const RESET = 'RESET';
export const SET_TYPE = 'SET_TYPE';
export const SET_PRIMARY_TYPE = 'SET_PRIMARY_TYPE';
export const SET_SIZE = 'SET_SIZE';
export const SET_SURFACE = 'SET_SURFACE';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_FILES = 'SET_FILES';
export const SET_COAT = 'SET_COAT';
export const SET_FOLD = 'SET_FOLD';
export const SET_PRELOAD = 'SET_PRELOAD';
export const SET_PAPER_QUALITY = 'SET_PAPER_QUALITY';
export const SET_FIELD = 'SET_FIELD';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const TYPE_CATEGORY = 'type';
export const TYPE_SIZE = 'size';
export const TYPE_SURFACE = 'material';
export const TYPE_COAT = 'coat';
export const TYPE_QUANTITY = 'quantity';
export const TYPE_FOLD = 'fold';
export const TYPE_PAPER_QUALITY = 'paper_quality';
export const CATEGORY_FILES = 'files';


export const resetAll = () => {
  return {
    type: RESET
  };
}

export const selectType = (id) => {
  return {
    type: SET_TYPE,
    value: id
  };
}

export const selectPrimaryType = (id) => {
  return {
    type: SET_PRIMARY_TYPE,
    value: id
  };
}

export const selectSize = (id) => {
  return {
    type: SET_SIZE,
    value: id
  };
}

export const selectSurface = (id) => {
  return {
    type: SET_SURFACE,
    value: id
  };
}

export const selectCoat = (id) => {
  return {
    type: SET_COAT,
    value: id
  };
}

export const selectQuantity = (id) => {
  return {
    type: SET_QUANTITY,
    value: id
  };
}

export const selectFold = (id) => {
  return {
    type: SET_FOLD,
    value: id
  };
}

export const setFiles = (files: File[]) => {
  return {
    type: SET_FILES,
    value: files
  };
}

export const setPaperQuality = (quality) => {
  return {
    type: SET_PAPER_QUALITY,
    value: quality
  };
}

export const updateCategories = (category) => {
  return {
    type: UPDATE_CATEGORIES,
    category
  }
}

export const setPreload = (category) => {
  return {
    type: SET_PRELOAD,
    category
  }
}

export const setField = (category, label, value) => {
  return {
    type: SET_FIELD,
    category,
    label,
    value
  }
}
