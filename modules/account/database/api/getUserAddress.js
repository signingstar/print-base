import { getUserAddress } from "../query/select"

const getAddress = (userData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(getUserAddress, userData, { logger}, (err, result) => {
    if(err) {
      return callback(err, result)
    }

    const { rows } = result

    if(rows.length >= 1 && rows[0].id ) {
      logger.info(`[DATABASE] ${result.rowCount} USER ADDRESS retreived successfully for user: ${userData[0]}`)
      callback(err, rows)
    } else {
      const message = '[DATABASE] No address exists for user: ${userData[0]}'
      callback({message, rowCount: 0})
    }
  })
}

export default getAddress
