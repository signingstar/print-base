import logger from "winston"

import pugCompiler from "./pugWrapper"
import assetsMap from "./assets_map"
import queryDb from "./postgres"
import Mailer from "./mailer"
import redisClient from "./redis_client"

const jsAsset = (key) => {
  if(assetsMap[key]) {
    return assetsMap[key].js
  }

  return
}

const cssAsset = (key) => {
  if(assetsMap[key]) {
    return assetsMap[key].css
  }

  return
}

const globalModules = {
  logger,
  pugCompiler,
  jsAsset,
  cssAsset,
  queryDb,
  Mailer,
  redisClient
}

export default globalModules
