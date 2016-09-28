import { deleteUserAddress } from "../query/delete"

const deleteAddress = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(deleteUserAddress, userData, { logger}, (err, result) => {
    if(err || result.rowCount === 0) {
      logger.error(`[DATABASE] error while deleting address : ${userData[1]}`)
      callback(err, result)
      return
    }

    logger.info(`[DATABASE] USER ADDRESS deleted successfully for user: ${userData[1]}`)
    callback(err, result.rowCount)
  })
}

export default deleteAddress
