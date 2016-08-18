import * as React from "react";

const SavedItems = ({visible}: {visible: boolean}) => {
  if(!visible) {
    return null;
  }

  return (
    <h3>My Saved Items</h3>
  );
}

export default SavedItems;
