import * as React from "react";

import ProfileSetup from "../containers/profile";
import OrdersSetup from "../containers/orders";
import SubscriptionsSetup from "../containers/subscriptions";
import SavedItemsSetup from "../containers/saved_items";

const SectionBody = () => {
  return (
    <div className='main-section-body'>
      <ProfileSetup />
      <OrdersSetup />
      <SubscriptionsSetup />
      <SavedItemsSetup />
    </div>
  );
}

export default SectionBody;
