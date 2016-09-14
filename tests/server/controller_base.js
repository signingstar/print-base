const responders = require("../../core/responder");

export const modules = {
  pug: {},
  logger: {},
  jsAsset: () => undefined,
  cssAsset: () => undefined
};

const attributes = {
  req: {},
  res: {}
};

const page = {};

export const params = {attributes, responders, page};
