import { userInfo, userAddress, userPassword } from "../query/update"
import { ACCOUNT_INFO, ACCOUNT_PASSWORD, USER_ADDRESS} from "../../modules"

const dbQueryType = (type) => {
  let queryType

  switch (type) {
    case ACCOUNT_INFO:
      queryType = userInfo
      break
    case ACCOUNT_PASSWORD:
      queryType = userAddress
      break
    case USER_ADDRESS:
      queryType = userPassword
      break
  }

  return queryType
}

const updateDatabaseEntry = (type, params, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  let queryType = dbQueryType(type)

  queryDb(queryType, params, { logger}, (err, result) => {
    if(err || result.rowCount === 0) {
      logger.error(`[DATABASE] error while updating Record`)
      callback(err, result)
      return
    }

    logger.info(`[DATABASE] Record updated successfully`)
    callback(err, result.rowCount)
  })
}

export const updateAccountInfo = (...args) => updateDatabaseEntry(ACCOUNT_INFO, ...args)
export const updateAccountPassword = (...args) => updateDatabaseEntry(ACCOUNT_PASSWORD, ...args)
export const updateUserAddress = (...args) => updateDatabaseEntry(USER_ADDRESS, ...args)
