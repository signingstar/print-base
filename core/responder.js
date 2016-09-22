let debug = require("debug")("Core:Responder")

const redirectWithLogging = (res, url, reasonCode, logger, statusCode = 302) => {
  if(logger) {
    logger.info(`[WEB-REDIRECT]`, {url, reasonCode, statusCode})
  }

  res.redirect(statusCode, url)
}

const setCookiesForResponse = (res, cookies = []) => {
  debug('setCookiesForResponse')
  for(let cookie of cookies) {
    let {key, value} = cookie
    res.cookie(key, value, cookie)
  }
}

const responders = {
  html: (res, next) => (html, err) => {
    if(err) {
      return next(err)
    }

    res.setHeader('Content-Length', Buffer.byteLength(html).toString())
    res.writeHead(200, {
      "Content-Type": "text/html"
    })

    res.end(html)
  },

  error: (res, next) => (html, err) => {
    if(err) {
      return next(err)
    }

    res.writeHead(500, {
      "Content-Type": "text/html"
    })

    res.end('Internal Server Error')
  },

  json: (res, next) => (json, err) => {
    if(err) {
      return next(err)
    }

    res.writeHead(200, {
      "Content-Type": "application/json"
    })

    res.end(JSON.stringify(json))
  },

  redirectForAuthentication: (res, next) => (url, reasonCode, logger, statusCode) => {
    let loginUrl = `/login?ref_url=${encodeURIComponent(url)}`

    redirectWithLogging(res, loginUrl, reasonCode, logger, statusCode)
  },

  redirectWithCookies: (res) => (url, cookies, logger) => {
    setCookiesForResponse(res, cookies)
    redirectWithLogging(res, encodeURI(url), 'general', logger)
  }
}

export default responders
