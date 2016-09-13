import { Response } from 'express';

const redirectWithLogging = (res, url, reasonCode, logger, statusCode = 302) => {
  logger.info(`[WEB-REDIRECT]`, {url, reasonCode, statusCode});

  res.redirect(statusCode, url);
};

const setCookiesForResponse = (res, cookies = []) => {
  debug('setCookiesForResponse');
  for(let cookie of cookies) {
    let {key, value} = cookie;
    res.cookie(key, value, cookie);
  }
};

const responders = {
  html: (res, next) => {
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

  error: (res, next) => {
    return (html, err) => {
      if(err) {
        return next(err);
      }

      res.writeHead(500, {
        "Content-Type": "text/html"
      });

      res.end('Internal Server Error');
    }
  },

  json: (res, next) => {
    return (json, err) => {
      if(err) {
        return next(err);
      }

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(json));
    }
  },

  redirectForAuthentication: (res, next) => {
    return (url, reasonCode, logger, statusCode) => redirectWithLogging(res, url, reasonCode, logger, statusCode)
  },

  redirectWithCookies: (res) => {
    return (url, cookies) => {
      setCookiesForResponse(res, cookies);
      res.redirect(encodeURI(url));
    }
  }


};

export default responders;
