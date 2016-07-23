var path = require('path');
var pug = require('pug');

var srcPath = './src/templates/main.pug';
var navigationConfig = require('../core/navigation-config.json');

export function routes(app:any, staticCall:any) {
	app.set("view engine", "pug");

	app.get("/", function(req:any, res:any){
		var fn = pug.compileFile(srcPath , {cache: true, pretty: true});
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
	app.use('/assets', staticCall('./public'));
}
