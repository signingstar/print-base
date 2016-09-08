import * as winston from "winston";
const pug = require("pug");

import assetsMap from "./assets_map";

const globalModules = {
  logger: winston,
  pug: pug,
  jsAsset: (key) => assetsMap[key].js,
  cssAsset: (key) => assetsMap[key].css
};

export default globalModules;
