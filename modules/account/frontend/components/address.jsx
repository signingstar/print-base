import React from "react"
import Route from 'react-router/Route'

import AddAddress from "../containers/address"

const Address = ({pathname}) => {
  return (
      <Route pattern={pathname} exactly component={AddAddress} />
  )
}

export default Address
