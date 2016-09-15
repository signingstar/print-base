import * as winston from "winston";
import pug from "pug";
import pugCompiler from "./pugWrapper";

import assetsMap from "./assets_map";

const globalModules = {
  logger: winston,
  pug,
  pugCompiler,
  jsAsset: (key) => assetsMap[key].js,
  cssAsset: (key) => assetsMap[key].css
};

export default globalModules;
