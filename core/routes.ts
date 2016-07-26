var path = require('path');
var pug = require('pug');
import * as express from "express";

const templatePath:string = './src/templates';
let srcPath:string = '';

module.exports = function (app:any) {
	// app.set("view engine", "pug");

	app.get("/", function(req:express.Request, res:express.Response){
		srcPath = `${templatePath}/main.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var navigationConfig = require('../core/navigation-config.json');

		var html = fn({
			navigationConfig: navigationConfig
		});

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.get("/login", function(req:express.Request, res:express.Response){
		srcPath = `${templatePath}/session/login.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.get("/signup", function(req:express.Request, res:express.Response){
		srcPath = `${templatePath}/session/signup.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.get("/forgot_password", function(req:express.Request, res:express.Response){
		srcPath = `${templatePath}/session/forgot_password.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.get("/contact", function(req:express.Request, res:express.Response){
		srcPath = `${templatePath}/contact_us/contact_us.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.use('/assets', express.static('./public'));
};
