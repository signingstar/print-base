import * as React from "react";

import Profile from "./profile";
import Orders from "./orders";
import Subscriptions from "./subscriptions";
import SavedItems from "./saved_items";

const SectionBody = () => {
  return (
    <div className='main-section-body'>
      <Profile />
      <Orders />
      <Subscriptions />
      <SavedItems />
    </div>
  );
}

export default SectionBody;
