import { addQuery } from "../query/insert"

const createQuery = (queryData, modules, cb) => {
  const { queryDb, logger } = modules
  const callback = cb;

  queryDb(addQuery, queryData, { logger}, (err, result) => {
    if(err || result.rowCount === 0) {
      logger.error(`[DATABASE] error while adding the customer query`)
      callback(err, result)
      return
    }

    logger.info(`[DATABASE] Query added successfully for user: ${queryData[1]}`)
    callback(err, result.rows[0])
  })
}

export default createQuery
