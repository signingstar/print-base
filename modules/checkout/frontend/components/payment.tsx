import * as React from "react";

const Payment = ({state}: {state: any}) => {
  return (
    <h3>Subscriptions - {state.subscription}</h3>
  );
}

export default Payment;
