const defaultOrderState = {
}

const servicesState = (state = defaultOrderState, {type, details}) => {
  console.log(`type:${type}`);
  return state;
}

export default servicesState;
