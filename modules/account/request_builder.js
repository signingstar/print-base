import getUserDetails from "./database/api/get_user_details"
import getUserAddress from "./database/api/get_user_address"

const RequestBuilder = ({location, category, userid}, {logger, queryDb}) => {
  const profile = (cb) => {
    getUserDetails([userid], {logger, queryDb}, (err, user) => {
      cb(err, user)
    })
  }

  const order =  (cb) => {
    const ordersState = {loaded: true, count: 6}
    cb(err, ordersState)
  }

  const address = (cb) => {
    getUserAddress([userid], {logger, queryDb}, (err, user) => {
      cb(err, user)
    })
  }

  let requests = {}

  switch(category) {
    case '':
    case 'profile':
      requests = {profile}
      break;
    case 'address':
      requests = {address}
      break;
    case 'order':
      requests = {order}
      break;
  }

  return requests
}


export default RequestBuilder
