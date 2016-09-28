import {extend} from "jquery"

import { UPDATE_ALL, ADDRESS_UPDATE, ADDRESS_ADD, ADDRESS_SET, ADDRESS_DELETE } from "../actions"

const defaultProfileState = {
  loaded: false
}

const deleteNestedAddress = (addresses, id) => {
  id = +id
  let addressInList = addresses.find(entry => entry.id === id)
  let indexOfId = addresses.indexOf(addressInList)

  if(indexOfId > -1) {
    addresses.splice(indexOfId, 1)
  }

  return addresses
}

const getAddressCopy = (address) => {
  if(address) {
    return JSON.parse(JSON.stringify(address))
  }

  return []
}

const updateNestedAddress = (addresses, address) => {
  let addressInList = addresses.find(entry => entry.id === address.id)
  extend(addressInList, address)
  return addresses
}

const profileState = (state = defaultProfileState, {type, details}) => {
  switch (type) {
    case UPDATE_ALL:
      return Object.assign({}, state, details['profile'])
    case ADDRESS_SET:
      return Object.assign({}, state, {address: details})
    case ADDRESS_ADD:
      let newAddresses = getAddressCopy(state.address)
      newAddresses.unshift(JSON.parse(JSON.stringify(details)))
      return Object.assign({}, state, {address: newAddresses})
    case ADDRESS_UPDATE:
      return Object.assign({}, state, {address: updateNestedAddress(getAddressCopy(state.address), details)})
    case ADDRESS_DELETE:
      return Object.assign({}, state, {address: deleteNestedAddress(getAddressCopy(state.address), details)})
    default:
      return state
  }

}

export default profileState
