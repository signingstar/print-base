import { getUserAddress } from "../query/select"

const getAddress = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(getUserAddress, userData, { logger}, (err, result) => {
    if(err) {
      return callback(err, result)
    }

    const { rows } = result

    logger.info(`[DATABASE] ${result.rowCount} USER ADDRESS retreived for user: ${userData[0]}`)
    callback(err, rows)
  })
}

export default getAddress
