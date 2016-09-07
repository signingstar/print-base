let debug = require("debug")('error:middleware');

const middleware = ({logger}) => {
  debug('init');

  return function(err, req, res, next) {
    debug(`handling ${err.stack}`);

    errorResponseBody = `
      <html>
        <head>
          <title>Error Page</title>
        </head>
        <body>
          <h1>Server Error</h1>
        </body>
      </html>
    `

    res.status(500);
    res.end(errorResponseBody);
  }
}

export default middleware;
