import serveStatic from "serve-static"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import path from "path"
import flash from "express-flash"
let debug = require("debug")('Core:Middleware')

import expressSession from "./session"
import errorMiddleware from "../modules/error/middleware"

const middleware = (app, router, globalModules) => {
  let {logger} = globalModules

  app.use(compression({filter: shouldCompress}))

  app.use(expressSession(app))

  app.use('/assets', serveStatic(path.join(__dirname, '../public'), {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }))

  app.use('/uploads', serveStatic(path.join(__dirname, '../uploads'), {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }))

  app.use(bodyParser.json({
    limit: '1mb',
    type: ['application/json']
  }))

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb',
    parameterLimit: 10000
  }))

  app.use(cookieParser())

  app.use(flash())

  app.use("/", router)

  app.use("*", (req,res) => {
    let options = {
      root: __dirname + '/../modules/error/',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }

    logger.warn(`[ERROR] Invalid URL accessed: ${req.baseUrl}`)

    res.status(404).sendFile('not_found.html', options)
  })

  app.use(errorMiddleware({logger}))

  const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
  }

  const setCustomCacheControl = (res, path) => {
    let lookupPath = serveStatic.mime.lookup(path)

    debug(`setCustomCacheControl with path ${path}:lookup path: ${lookupPath}`)

    if (lookupPath === 'application/javascript') {
      // Custom Cache-Control for JS files
      if(path.indexOf('/react')) {
        res.setHeader('Cache-Control', 'public, max-age=1000000')
      } else {
        res.setHeader('Cache-Control', 'public, max-age=10000')
      }
    } else if (lookupPath === 'text/css') {
      // Custom Cache-Control for CSS files
      res.setHeader('Cache-Control', 'public, max-age=100000')
    } else if (lookupPath === 'image/png') {
      // Custom Cache-Control for png files
      res.setHeader('Cache-Control', 'public, max-age=10000')
    } else if (lookupPath === 'image/svg') {
      // Custom Cache-Control for svg files
      res.setHeader('Cache-Control', 'public, max-age=10000')
    } else if (lookupPath === 'image/jpg') {
      // Custom Cache-Control for jpg files
      res.setHeader('Cache-Control', 'public, max-age=100000')
    }
  }
}

export default middleware
