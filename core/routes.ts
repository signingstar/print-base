var path = require('path');
var pug = require('pug');

const templatePath:string = './src/templates';
let srcPath:string = '';

export function routes(app:any, staticCall:any) {
	app.set("view engine", "pug");

	app.get("/", function(req:any, res:any){
		srcPath = `${templatePath}/main.pug`;
		var navigationConfig = require('../core/navigation-config.json');

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

	app.get("/login", function(req:any, res:any){
		srcPath = `${templatePath}/session/login.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.get("/signup", function(req:any, res:any){
		srcPath = `${templatePath}/session/signup.pug`;

		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
		var html = fn();

		res.writeHead(200, {
			"Content-Type": "text/html"
		});

		res.write(html);
		res.end();
	});

	app.use('/assets', staticCall('./public'));
}
