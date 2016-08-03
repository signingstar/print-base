import * as express from "express";
import * as http from "http";
import { map, object } from "underscore";
let debug = require("debug")('Core:worker');

import { globalModules } from "./modules";
import { routes } from "./routes";
debug('Routes loaded');
import { middleware } from "./middleware";
debug('Middleware loaded');

let app = express();
let server = http.createServer(app);
debug("Created server. Setting Up");
let { logger } = globalModules;

middleware(app, globalModules);

let routingFunctions = function(app: express.Application) {
	return object(map(['get', 'post', 'delete', 'put', 'head','use'], function(method: string) {
		let func = function(route: string) {
			logger.info(`[ROUTER] Mounting routes: ${route}`);
			return app[method].apply(app, arguments);
		};
		return [method, func];
	}));
};

let wrapperApp:any = routingFunctions(app);

routes(wrapperApp, globalModules);

let port:number = process.env.PORT || 8000;

server.listen(port, function() {
	debug(`Server listening on port ${port}`);
	logger.info("server started on part 8000");
});
