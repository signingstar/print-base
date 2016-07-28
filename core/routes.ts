import {Request, Response, static} from "express";

let path = require('path');
let pug = require('pug');

import * as controller from './controller';
import * as responder from './responder';

module.exports = function (app:any) {
	// app.set("view engine", "pug");

	let appControllers = {
		login: require('../modules/login/controller.ts'),
		home: require('../modules/home/controller.ts'),
		signup: require('../modules/signup/controller.ts'),
		forgot_password: require('../modules/forgot_password/controller.ts'),
		order: require('../modules/order/controller.ts'),
		contact_us: require('../modules/contact_us/controller.ts')

	};

	let {processRequest} = controller(appControllers);

	app.get("/", processRequest('home', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.get("/login", processRequest('login', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.get("/signup", processRequest('signup', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.get("/forgot_password", processRequest('forgot_password', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.get("/contact", processRequest('contact_us', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.get("/order", processRequest('order', 'main', {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responder.html
		}
	}));

	app.use('/assets', static('./public'));
};
