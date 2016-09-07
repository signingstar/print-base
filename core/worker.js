import express from "express";
import http from "http";
import { map, object } from "underscore";
let debug = require("debug")('Core:worker');

import globalModules from "./modules";
import routes from "./routes";
debug('Routes loaded');
import middleware from "./middleware";
debug('Middleware loaded');

let app = express();
let router = express.Router();

let { logger } = globalModules;

const routingFunctions = (app) => {
  return object(map(['get', 'post', 'delete', 'put', 'head','use'], (method) => {
    const func = function(route) {
      logger.info(`[ROUTER] Mounting routes: ${route} | ${method}`);
      return app[method].apply(app, arguments);
    };
    return [method, func];
  }));
};

routes(routingFunctions(router), globalModules);

middleware(app, router, globalModules);

let port = process.env.PORT || 8000;

let server = http.createServer(app);
debug("Created server. Setting Up");

server.listen(port, () => {
  debug(`Server listening on port ${port}`);
  logger.info("server started on part 8000");
});
