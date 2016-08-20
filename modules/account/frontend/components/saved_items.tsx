import * as React from "react";

const SavedItems = ({state}: {state: any}) => {
  return (
    <h3>My Saved Items - {state.savedItem}</h3>
  );
}

export default SavedItems;
