import { getUserInfo } from "../query/select"

const getUserDetails = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(getUserInfo, userData, { logger}, (err, result) => {
    if(err) {
      return callback(err, result)
    }

    const { rows } = result

    if(rows.length === 1 && rows[0].email ) {
      logger.info(`[DATABASE] USER RECORD retreived successfully for user: ${userData[0]}`)
      callback(err, rows[0])
    } else {
      const message = 'User not found, who requested for account details'
      callback({message})
    }
  })
}

export default getUserDetails
