import {ajax} from "jquery"

//Action Types
export const UPDATE_ALL = 'UPDATE_ALL'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const ADDRESS_SET = 'ADDRESS_SET'
export const ADDRESS_ADD = 'ADDRESS_ADD'
export const ADDRESS_UPDATE = 'ADDRESS_UPDATE'
export const ADDRESS_DELETE = 'ADDRESS_DELETE'

export const updateAllStates = (details) => {
  return {
    type: UPDATE_ALL,
    details
  }
}

export const setAddressInProfile = (address) => {
  return {
    type: ADDRESS_SET,
    details: address
  }
}

export const addAddressInProfile = (address) => {
  return {
    type: ADDRESS_ADD,
    details: address
  }
}

export const updateAddressInProfile = (address) => {
  return {
    type: ADDRESS_UPDATE,
    details: address
  }
}

export const updateDeletedAddress = (id) => {
  return {
    type: ADDRESS_DELETE,
    details: id
  }
}

export const updateProfileInfo = (profile) => {
  return {
    type: UPDATE_PROFILE,
    details: profile
  }
}

export const getAddresses = ({loadAddress, pathname}) => {
  let url = '/account/profile/address/get'

  ajax({
    url,
    cache: false,
    dataType: 'json',
    success: (data) => loadAddress(data) ,
    error: function(xhr, status, err) {
      console.error(url, status, err.toString())
    }.bind(this)
  })
}

export const addAddress = (data, cb) => {
  const url = '/account/address/add'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json',
    success: (res) => {
      data.id = res.id
      cb(data)
    },
    error: (xhr, status, err) => console.log(`err:${JSON.stringify(err)}`)
  })
}

export const updateAddress = (data, cb) => {
  const url = '/account/address/update'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json',
    success: (res) => cb(),
    error: (xhr, status, err) => console.log(`err:${JSON.stringify(err)}`)
  })
}

export const deleteAddress = (id, cb) => {
  const url = '/account/address/delete'

  ajax({
    url,
    method: 'POST',
    data: {id},
    dataType: 'json',
    success: (res) => cb(),
    error: (xhr, status, err) => console.log(`err:${JSON.stringify(err)}`)
  })
}

export const updateProfile = (data, cb) => {
  const url = '/account/profile/update'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json',
    success: (res) => cb(),
    error: (xhr, status, err) => console.log(`err:${JSON.stringify(err)}`)
  })
}
