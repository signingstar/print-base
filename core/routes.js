"use strict";
var path = require('path');
var mustache = require('mustache-express');
var pathString = './src/templates';
console.log(pathString);
function routes(app, staticCall) {
    app.set("view engine", "pug");
    app.set('views', pathString);
    app.get("/", function (req, res) {
        res.render('main', { title: 'Hey', message: 'Hello there!' });
    });
    app.use('/assets', staticCall('./public'));
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map