import { addUserAddress } from "../query/insert"

const addAddress = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(addUserAddress, userData, { logger}, (err, result) => {
    if(err || result.rowCount === 0) {
      logger.error(`[DATABASE] error while adding the address`)
      callback(err, result)
      return
    }

    logger.info(`[DATABASE] USER ADDRESS add successfully for user: ${userData[0]}`)
    callback(err, result.rows[0])
  })
}

export default addAddress
