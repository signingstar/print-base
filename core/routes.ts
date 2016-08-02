import * as express from "express";

let path = require('path');

import {coatControllers} from "./appControllers";
import { responders } from './responder';

export function routes(app:express.Application, globalModules:any) {
	let {logger} = globalModules;

	// app.set("view engine", "pug");
	let processRequest = coatControllers(globalModules);
	let redirectWithLogging = function (res:express.Response, url:string, reasonCode:string, statusCode = 302) {
		logger.info(`[WEB-REDIRECT]` + {url, reasonCode, statusCode});

		res.redirect(statusCode, url);
	};

	interface Cookie {
		key: string,
		value:string
	}

	let setCookiesForResponse = function(res:express.Response, cookies:Cookie[]) {
		for(let cookie of cookies) {
			let {key, value} = cookie;
			res.cookie(key, value, cookie);
		}
	};

	let redirectWithCookies = function(res: express.Response) {
		return function(url:string, cookies:any) {
			setCookiesForResponse(res, cookies);
			res.redirect(encodeURI(url));
		}
	}

	let processOptions = {
		attributes: function (req:express.Request, res:express.Response, next:any) {
			return {req, res}
		},
		responders: {
			html: responders.html
		}
	};

	app.get("/", processRequest('homeController', 'main', processOptions));

	app.get("/login", processRequest('loginController', 'get', processOptions));

	app.post("/login", processRequest('loginController', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/signup", processRequest('signUpController', 'get', processOptions));

	app.post("/signup", processRequest('signUpController', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/forgot_password", processRequest('forgotPasswordController', 'main', processOptions));

	app.get("/contact", processRequest('contactUsController', 'main', processOptions));

	app.get("/order", processRequest('orderController', 'main', processOptions));

	app.get("/services", processRequest('ourServicesController', 'main', processOptions));

	app.get("/products", processRequest('productsController', 'main', processOptions));

	app.get("/partner", processRequest('products', 'main', processOptions));

	app.get("/account", processRequest('accountController', 'main', processOptions));

	app.get("/signout", processRequest('signOutController', 'main', processOptions));

	app.use('/assets', express.static('./public'));
};
