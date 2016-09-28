import React from "react"
import Match from 'react-router/Match'

import AddAddress from "../containers/address"

const Address = ({pathname}) => {
  return (
      <Match pattern={pathname} exactly component={AddAddress} />
  )
}

export default Address
