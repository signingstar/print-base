export const CATEGORY = 'category';
export const SUB_CATEGORY = 'subCategory';

export const SIZE = 'size';
export const SURFACE = 'material';
export const COAT = 'coat';
export const QUANTITY = 'quantity';
export const FOLD = 'fold';
export const PAPER_QUALITY = 'paper_quality';
export const FILES = 'files';

//Action Types
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SUB_CATEGORY = 'SET_SUB_CATEGORY';
export const SET_ALL_CATEGORY = 'SET_ALL_CATEGORY';

export const RESET = 'RESET';
export const SET_SIZE = 'SET_SIZE';
export const SET_SURFACE = 'SET_SURFACE';
export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_FILES = 'SET_FILES';
export const SET_COAT = 'SET_COAT';
export const SET_FOLD = 'SET_FOLD';
export const SET_PAPER_QUALITY = 'SET_PAPER_QUALITY';
export const SET_FIELD = 'SET_FIELD';

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category
  };
}

export const setSubCategory = (subCategory) => {
  return {
    type: SET_SUB_CATEGORY,
    subCategory
  };
}

export const setAllCategory = (category, subCategory) => {
  return {
    type: SET_ALL_CATEGORY,
    category,
    subCategory
  };
}

export const resetAll = () => {
  return {
    type: RESET
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

export const setFold = (id) => {
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

export const setField = (category, label, value) => {
  return {
    type: SET_FIELD,
    category,
    label,
    value
  }
}
