import {Request, Response, Application, static} from "express";

let path = require('path');
let pug = require('pug');

import * as controller from './controller';
import * as responder from './responder';

module.exports = function (app:Application) {
	// app.set("view engine", "pug");

	let appControllers = {
		login: require('../modules/login/controller.ts'),
		home: require('../modules/home/controller.ts'),
		signup: require('../modules/signup/controller.ts'),
		forgot_password: require('../modules/forgot_password/controller.ts'),
		order: require('../modules/order/controller.ts'),
		our_services: require('../modules/our_services/controller.ts'),
		products: require('../modules/products/controller.ts'),
		contact_us: require('../modules/contact_us/controller.ts')

	};

	let {processRequest} = controller(appControllers);
	let processOptions = {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	};

	app.get("/", processRequest('home', 'main', processOptions));

	app.get("/login", processRequest('login', 'login_form', processOptions));

	app.post("/login", processRequest('login', 'login_action', processOptions));

	app.get("/signup", processRequest('signup', 'main', processOptions));

	app.get("/forgot_password", processRequest('forgot_password', 'main', processOptions));

	app.get("/contact", processRequest('contact_us', 'main', processOptions));

	app.get("/order", processRequest('order', 'main', processOptions));

	app.get("/services", processRequest('our_services', 'main', processOptions));

	app.get("/partner", processRequest('products', 'main', processOptions));

	app.use('/assets', static('./public'));
};
