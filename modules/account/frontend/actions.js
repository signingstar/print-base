import {ajax} from "jquery"

//Action Types
export const UPDATE_ALL = 'UPDATE_ALL'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'
export const ADDRESS_SET = 'ADDRESS_SET'
export const ADDRESS_ADD = 'ADDRESS_ADD'
export const ADDRESS_UPDATE = 'ADDRESS_UPDATE'
export const ADDRESS_DELETE = 'ADDRESS_DELETE'
export const SET_ORDERS = 'SET_ORDERS'

//Error related
export const CLEAR_ALL_ERRORS = 'CLEAR_ALL_ERRORS'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const SET_ERROR = 'SET_ERROR'
export const SET_SUCCESS = 'SET_SUCCESS'

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

export const setAccountData = (data) => {
  return {
    type: SET_PROFILE,
    details: data
  }
}

export const clearAllErrors = () => {
  return {
    type: CLEAR_ALL_ERRORS
  }
}

export const clearError = (category) => {
  return {
    type: CLEAR_ERROR,
    details: category
  }
}

export const setError = (message) => {
  return {
    type: SET_ERROR,
    details: message
  }
}

export const setSuccess = (message) => {
  return {
    type: SET_SUCCESS,
    details: message || {success: true}
  }
}

export const ordersUpdate = (orders) => {
  return {
    type: SET_ORDERS,
    params: orders
  }
}

// ------------------------ AJAX Calls ----------------------------

export const getAddresses = ({loadAddress, pathname}) => {
  let url = '/account/address/get'

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

export const updateProfile = (data, cb) => {
  const url = '/account/profile/update'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json'
  })
  .done((res, textStatus) => cb({res}))
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))
}

export const addAddress = (data, cb) => {
  const url = '/account/address/add'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json'
  })
  .done((res, textStatus) => {
    data.id = res.id
    cb({data})
  })
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))
}

export const updateAddress = (data, cb) => {
  const url = '/account/address/update'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json'
  })
  .done((res, textStatus) => cb({res}))
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))

}

export const deleteAddress = (id, cb) => {
  const url = '/account/address/delete'

  ajax({
    url,
    method: 'POST',
    data: {id},
    dataType: 'json'
  })
  .done((res, textStatus) => cb({res}))
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))
}

export const updateAccountPassword = (data, cb) => {
  const url = '/account/secret/update'

  ajax({
    url,
    method: 'POST',
    data,
    dataType: 'json'
  })
  .done((res, textStatus) => cb({}))
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))
}

export const getAccountData = (data, cb) => {
  const url = '/account/profile/get'

  ajax({
    url,
    data,
    dataType: 'json',
    success: (res) => cb(res),
    error: (xhr, status, err) => console.log(`err:${JSON.stringify(err)}`)
  })
}

export const viewOrders = (cb) => {
  ajax({
    method: 'GET',
    url: '/orders',
    dataType: 'json'
  })
  .done((res, textStatus) => cb({res}))
  .fail((xhr, status, err) => cb({err: xhr.responseJSON, status: xhr.status}))
}
