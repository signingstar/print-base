const defaultOrderState = {
}

const servicesState = (state: any = defaultOrderState, {type, details}: {type: string, details?: any}) => {
  console.log(`type:${type}`);
  return state;
}

export default servicesState;
