var path = require('path');
var mustache = require('mustache-express');
var pathString = './src/templates';

console.log(pathString);

export function routes(app:any, staticCall:any) {
	app.set("view engine", "pug");
  app.set('views', pathString);

	app.get("/", function(req:any, res:any){
		res.render('main', { title: 'Hey', message: 'Hello there!'});
	});
	app.use('/assets', staticCall('./public'));
}
