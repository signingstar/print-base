import appControllers from "./appControllers";
import responders from "./responder";
let debug = require("debug")('Core:AppControllers');

const routes = (app, globalModules) => {
  debug('export routes');
  let {logger} = globalModules;

  let processRequest = appControllers(globalModules);

  let redirectWithLogging = (res, url, reasonCode, statusCode = 302) => {
    logger.info(`[WEB-REDIRECT]` + {url, reasonCode, statusCode});

    res.redirect(statusCode, url);
  };

  let setCookiesForResponse = (res, cookies = []) => {
    debug('setCookiesForResponse');
    for(let cookie of cookies) {
      let {key, value} = cookie;
      res.cookie(key, value, cookie);
    }
  };

  let redirectWithCookies = (res) => {
    debug('redirectWithCookies');
    return (url, cookies) => {
      setCookiesForResponse(res, cookies);
      res.redirect(encodeURI(url));
    }
  }

  let processOptions = {
    attributes: function (req, res, next) {
      return {req, res}
    },
    responders: {
      html: responders.html,
      error: responders.error,
      json: responders.json
    }
  };

  app.get("/", processRequest('homeController', 'main', processOptions));

  app.get("/account", processRequest('accountController', 'main', processOptions));

  app.get("/account/details", processRequest('accountController', 'details', processOptions));

  app.get("/account/:category", processRequest('accountController', 'main', processOptions));

  app.get("/checkout", processRequest('checkoutController', 'main', processOptions));

  app.get("/checkout/:category", processRequest('checkoutController', 'details', processOptions));

  app.post("/checkout", processRequest('checkoutController', 'post', processOptions));

  app.get("/contact-us", processRequest('contactUsController', 'main', processOptions));

  app.get("/forgot-password", processRequest('forgotPasswordController', 'main', processOptions));

  app.get("/login", processRequest('loginController', 'get', processOptions));

  app.post("/login", processRequest('loginController', 'post',
    {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies, html: responders.html }
    }
  ));

  app.get("/order", processRequest('orderController', 'main', processOptions));

  app.get("/order/:category", processRequest('orderController', 'main', processOptions));

  app.get("/partner", processRequest('partnerController', 'get', processOptions));

  app.post("/partner", processRequest('partnerController', 'post', {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies }
    }
  ));

  app.get("/services", processRequest('ourServicesController', 'main', processOptions));

  app.get("/services/:category", processRequest('ourServicesController', 'main', processOptions));

  app.get("/password-reset", processRequest('passwordResetController', 'main', processOptions));

  app.post("/password-reset", processRequest('passwordResetController', 'reset_password', {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies }
    }
  ));

  app.get("/marketing", processRequest('marketingController', 'main', processOptions));

  app.get("/marketing/:category", processRequest('marketingController', 'main', processOptions));

  app.get("/signout", processRequest('signOutController', 'main', processOptions));

  app.get("/signup", processRequest('signUpController', 'get', processOptions));

  app.post("/signup", processRequest('signUpController', 'post',
    {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies }
    }
  ));

  app.get("/why-us", processRequest('whyUsController', 'main', processOptions));

  app.post('/upload', processRequest('photoInventoryController', 'main', processOptions));
};

export default routes;
