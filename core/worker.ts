import * as express from "express";
import * as _ from "lodash";
import * as http from 'http';
import {routes} from "./routes";

var app = express();
var server = http.createServer(app);

routes(app, express.static);

server.listen(8000, function() {
	console.log("listening on part 8000");
});
