import { Application, Response } from 'express';
import * as serveStatic from "serve-static";
let debug = require("debug")('Core:Middleware');
let rewrite = require("express-urlrewrite");

export function middleware(app: Application, globalModules: any) {
  let {logger} = globalModules;
  app.use(rewrite('/services/:id', '/services?service_type=:id'));

  app.use(rewrite('/products/:id', '/products?product_type=:id'));

  app.use('/assets', serveStatic('./public', {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }));

  function setCustomCacheControl (res: Response, path: string) {
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
