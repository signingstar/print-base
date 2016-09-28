import { updateUserInfo } from "../query/update"

const addAddress = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  console.log(`query:${updateUserInfo} | queryString:${JSON.stringify(userData)}`)

  queryDb(updateUserInfo, userData, { logger}, (err, result) => {
    if(err || result.rowCount === 0) {
      logger.error(`[DATABASE] error while updating user details`)
      callback(err, result)
      return
    }

    logger.info(`[DATABASE] USER DETAILS updated successfully for user: ${userData[0]}`)
    callback(err, result.rowCount)
  })
}

export default addAddress
