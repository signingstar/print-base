import * as React from "react";

const Orders = ({state}: {state: any}) => {
  return (
    <h3>My Orders: {state.count}</h3>
  );
}

export default Orders;
