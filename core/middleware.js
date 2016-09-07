import { Application, Request, Response } from 'express';
import serveStatic from "serve-static";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
let debug = require("debug")('Core:Middleware');
let rewrite = require("express-urlrewrite");

const middleware = (app, globalModules) => {
  let {logger} = globalModules;

  app.use(compression({filter: shouldCompress}))

  function shouldCompress(req: Request, res: Response) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }

    // fallback to standard filter function
    return compression.filter(req, res);
  }

  app.use('/assets', serveStatic('./public', {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }));

  app.use(bodyParser.json({
    limit: '1mb',
    type: ['application/json']
  }));

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb',
    parameterLimit: 10000
  }));

  app.use(cookieParser());

  function setCustomCacheControl (res, path) {
    let lookupPath = serveStatic.mime.lookup(path);

    debug(`setCustomCacheControl with path ${path}:lookup path: ${lookupPath}`);

    if (lookupPath === 'application/javascript') {
      // Custom Cache-Control for JS files
      if(path.indexOf('/react')) {
        res.setHeader('Cache-Control', 'public, max-age=1000000');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=10000');
      }
    } else if (lookupPath === 'text/css') {
      // Custom Cache-Control for CSS files
      res.setHeader('Cache-Control', 'public, max-age=100000');
    } else if (lookupPath === 'image/png') {
      // Custom Cache-Control for png files
      res.setHeader('Cache-Control', 'public, max-age=10000');
    } else if (lookupPath === 'image/svg') {
      // Custom Cache-Control for svg files
      res.setHeader('Cache-Control', 'public, max-age=10000');
    } else if (lookupPath === 'image/jpg') {
      // Custom Cache-Control for jpg files
      res.setHeader('Cache-Control', 'public, max-age=100000');
    }
  }
}

export default middleware;
