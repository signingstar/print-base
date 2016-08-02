import * as express from "express";
import * as http from "http";
import { map, object } from "underscore";

import { globalModules } from "./modules";
import { routes } from "./routes";
import { middleware } from "./middleware";

let app = express();
let server = http.createServer(app);
let { logger } = globalModules;

middleware(app, globalModules);

let routingFunctions = function(app: express.Application) {
	return object(map(['get', 'post', 'delete', 'put', 'head','use'], function(method: string) {
		let func = function(route: string) {
			logger.info(`Adding routes ${route}`);
			return app[method].apply(app, arguments);
		};
		return [method, func];
	}));
};

let wrapperApp:any = routingFunctions(app);

routes(wrapperApp, globalModules);

server.listen(8000, function() {
	logger.info("server started on part 8000");
});
