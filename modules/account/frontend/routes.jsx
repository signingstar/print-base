import MainContents from "./containers/main_contents"
import Profile from "./containers/profile"
import Orders from "./containers/orders"
import Subscriptions from "./containers/subscriptions"
import SavedItems from "./containers/saved_items"

const routes = [
  {
    pattern: '/account',
    component: MainContents,
    routes: [
      {
        pattern: 'profile',
        component: Profile
      },
      {
        pattern: 'orders',
        component: Orders
      },
      {
        pattern: 'subscriptions',
        component: Subscriptions
      },
      {
        pattern: 'saved-items',
        component: SavedItems
      },
    ]
  }
]

export default routes
