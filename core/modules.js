import * as winston from "winston";
const pug = require('pug');

export let globalModules = {
  logger: winston,
  pug: pug
};
