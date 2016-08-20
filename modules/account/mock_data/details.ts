interface AccountData {
  [key: string]: any
}

const AccountDetails: AccountData = {
  "profile": {
    name: "Amul"
  },
  "orders": {
    count: 5
  },
 "subscriptions": {
    subscription: "Daily Newsletter"
  },
  "saved-items": {
    savedItem: "Orange"
  }
}

export default AccountDetails;
