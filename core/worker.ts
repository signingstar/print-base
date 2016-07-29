import * as express from "express";
import {map,object} from "underscore";
import * as http from 'http';
import * as routes from "./routes";
import {middleware} from "./middleware";

let app = express();
let server = http.createServer(app);

middleware(app);

let routingFunctions = function(app:express.Application) {
	return object(map(['get', 'post', 'delete', 'put', 'head','use'], function(method:string) {
		let func = function(route:string) {
			console.log(`Adding routes ${route}`);
			return app[method].apply(app, arguments);
		};
		return [method, func];
	}));
};

let wrapperApp:any = routingFunctions(app);

routes(wrapperApp);

server.listen(8000, function() {
	console.log("listening on part 8000");
});
