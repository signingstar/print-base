import * as winston from "winston";
const pug = require('pug');

const globalModules = {
  logger: winston,
  pug: pug
};

export default globalModules;
