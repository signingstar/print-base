import * as logger from "winston"

import pugCompiler from "./pugWrapper"
import assetsMap from "./assets_map"
import queryDb from "./postgres"

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
  queryDb
}

export default globalModules
