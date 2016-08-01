import {Request, Response, Application, static} from "express";

let path = require('path');

import * as controller from './controller';
import {responders} from './responder';

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
		contact_us: require('../modules/contact_us/controller.ts'),
		account: require('../modules/account/controller.ts'),
		signout: require('../modules/signout/controller.ts')

	};

	let {processRequest} = controller(appControllers);
	let redirectWithLogging = function (res:Response, url:string, reasonCode:string, statusCode = 302) {
		console.log(`[WEB-REDIRECT]` + {url, reasonCode, statusCode});

		res.redirect(statusCode, url);
	};

	let setCookiesForResponse = function(res:Response, cookies:any = []) {
		for(let cookie in cookies) {
			let {key, value} = cookie;
			res.cookie(key, value, cookie);
		}
	};

	let redirectWithCookies = function(res: Response) {
		return function(url:string, cookies:any) {
			setCookiesForResponse(res, cookies);
			res.redirect(encodeURI(url));
		}
	}

	let processOptions = {
		attributes: function (req:Request, res:Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responders.html
		}
	};

	app.get("/", processRequest('home', 'main', processOptions));

	app.get("/login", processRequest('login', 'get', processOptions));

	app.post("/login", processRequest('login', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/signup", processRequest('signup', 'get', processOptions));

	app.post("/signup", processRequest('signup', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/forgot_password", processRequest('forgot_password', 'main', processOptions));

	app.get("/contact", processRequest('contact_us', 'main', processOptions));

	app.get("/order", processRequest('order', 'main', processOptions));

	app.get("/services", processRequest('our_services', 'main', processOptions));

	app.get("/products", processRequest('products', 'main', processOptions));

	app.get("/partner", processRequest('products', 'main', processOptions));

	app.get("/account", processRequest('account', 'main', processOptions));

	app.get("/signout", processRequest('signout', 'main', processOptions));

	app.use('/assets', static('./public'));
};
