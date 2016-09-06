import { Response } from 'express';

export let responders = {
  html: function(res, next) {
    return function(html, err) {
      if(err) {
        return next(err);
      }

      res.setHeader('Content-Length', Buffer.byteLength(html).toString());
      res.writeHead(200, {
        "Content-Type": "text/html"
      });

      res.end(html);
    }
  },

  error: function(res, next) {
    return function(html, err) {
      if(err) {
        return next(err);
      }

      res.writeHead(500, {
        "Content-Type": "text/html"
      });

      res.end('Internal Server Error');
    }
  },

  json: function(res, next) {
    return function(json, err) {
      if(err) {
        return next(err);
      }

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(json));
    }
  }
};
