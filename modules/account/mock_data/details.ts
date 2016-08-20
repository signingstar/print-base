interface AccountData {
  profile: any;
  orders: any;
  subscriptions: any,
  savedItems: any
}

const AccountDetails: AccountData = {
  profile: {
    name: 'Amul'
  },
  orders: {
    count: 5
  },
  subscriptions: {
    subscription: 'Daily Newsletter'
  },
  savedItems: {
    savedItem: 'Orange'
  }
}

export default AccountDetails;
