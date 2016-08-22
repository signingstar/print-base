import { Application, Request, Response } from "express";

let path = require('path');
let debug = require("debug")('Core:AppControllers');

import { appControllers } from "./appControllers";
import { responders } from "./responder";

export function routes(app: Application, globalModules: any) {
	debug('export routes');
	let {logger} = globalModules;

	let processRequest = appControllers(globalModules);

	let redirectWithLogging = function (res: Response, url: string, reasonCode: string, statusCode = 302) {
		logger.info(`[WEB-REDIRECT]` + {url, reasonCode, statusCode});

		res.redirect(statusCode, url);
	};

	interface Cookie {
		key: string,
		value: string
	}

	let setCookiesForResponse = function(res: Response, cookies: Cookie[] = []) {
		debug('setCookiesForResponse');
		for(let cookie of cookies) {
			let {key, value} = cookie;
			res.cookie(key, value, cookie);
		}
	};

	let redirectWithCookies = function(res: Response) {
		debug('redirectWithCookies');
		return function(url: string, cookies: Cookie[]) {
			setCookiesForResponse(res, cookies);
			res.redirect(encodeURI(url));
		}
	}

	let processOptions = {
		attributes: function (req: Request, res: Response, next: any) {
			return {req, res}
		},
		responders: {
			html: responders.html,
			error: responders.error,
			json: responders.json
		}
	};

	app.get("/", processRequest('homeController', 'main', processOptions));

	app.get("/account", processRequest('accountController', 'main', processOptions));

	app.get("/account/details", processRequest('accountController', 'details', processOptions));

	app.get("/account/:category", processRequest('accountController', 'main', processOptions));

	app.get("/contact", processRequest('contactUsController', 'main', processOptions));

	app.get("/forgot-password", processRequest('forgotPasswordController', 'main', processOptions));

	app.get("/login", processRequest('loginController', 'get', processOptions));

	app.post("/login", processRequest('loginController', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies, html: responders.html }
		}
	));

	app.get("/order", processRequest('orderController', 'main', processOptions));

	app.get("/partner", processRequest('partnerController', 'main', processOptions));

	app.get("/services", processRequest('ourServicesController', 'main', processOptions));

	app.get("/password-reset", processRequest('passwordResetController', 'main', processOptions));

	app.post("/password-reset", processRequest('passwordResetController', 'reset_password', {
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/products", processRequest('productsController', 'main', processOptions));

	app.get("/signout", processRequest('signOutController', 'main', processOptions));

	app.get("/signup", processRequest('signUpController', 'get', processOptions));

	app.post("/signup", processRequest('signUpController', 'post',
		{
			attributes: processOptions.attributes,
			responders: { redirectWithCookies }
		}
	));

	app.get("/why-us", processRequest('whyUsController', 'main', processOptions));
};
