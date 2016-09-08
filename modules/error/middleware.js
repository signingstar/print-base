let debug = require("debug")('error:middleware');

const middleware = ({logger}) => {
  debug('init');

  return function(err, req, res, next) {
    debug(`handling ${err.stack}`);

    let errorResponseBody = `
      <html>
        <head>
          <title>Error Page</title>
        </head>
        <body>
          <div style="width: 800px;margin:100px auto;text-align:center;">
            <span><img src='/assets/sad-smiley.png' style="height:200px; width:200px;margin-bottom: 50px;"/></span>
            <h1 style="font-size: 20px;">Internal Server Error! Sorry, We are having bad day.</h1>
          </div>
        </body>
      </html>
    `

    res.status(500);
    res.end(errorResponseBody);
  }
}

export default middleware;
