import { Response } from 'express';

export let responders = {
  html: function(res: Response, next: any) {
    return function(html: string, err: any) {
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

  error: function(res: Response, next: any) {
    return function(html: string, err: any) {
      if(err) {
        return next(err);
      }

      res.writeHead(500, {
        "Content-Type": "text/html"
      });

      res.end('Internal Server Error');
    }
  },

  json: function(res: Response, next: any) {
    return function(json: any, err: any) {
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
