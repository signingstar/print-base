import * as React from "react";

const Subscriptions = ({visible}: {visible: boolean}) => {
  if(!visible) {
    return null;
  }

  return (
    <h3>My Subscriptions</h3>
  );
}

export default Subscriptions;