import * as winston from "winston";
var pug = require('pug');

export let globalModules = {
  logger: winston,
  pug: pug
};
