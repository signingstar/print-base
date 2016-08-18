import * as React from "react";

const Orders = ({visible}: {visible: boolean}) => {
  if(!visible) {
    return null;
  }

  return (
    <h3>My Orders</h3>
  );
}

export default Orders;
