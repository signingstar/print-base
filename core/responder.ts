import {Response} from 'express';

let responders = {
  html: function(res: Response, next:any) {
    return function(html:string, err:any) {
      if(err) {
        return next(err);
      }

      res.setHeader('Content-Length', Buffer.byteLength(html).toString());
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(html);
    }
  }
};

module.exports =  responders;
