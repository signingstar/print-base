export const mapUrlPathToInternalCategory = (category: string) => {
  let internalCategory: string = undefined;

  switch(category) {
    case '':
    case 'profile':
      internalCategory = 'profile';
      break;
    case 'subscriptions':
      internalCategory = 'subscriptions';
      break;
    case 'orders':
      internalCategory = 'orders';
      break;
    case 'saved-items':
      internalCategory = 'savedItems';
      break;
  }

  return internalCategory;
}

export const mapInternalCategoryToUrlPath = (category: string) => {
  let internalCategory: string = undefined;

  switch(category) {
    case '':
    case 'profile':
      internalCategory = 'profile';
      break;
    case 'subscriptions':
      internalCategory = 'subscriptions';
      break;
    case 'orders':
      internalCategory = 'orders';
      break;
    case 'savedItems':
      internalCategory = 'saved-items';
      break;
  }

  return internalCategory;
}
