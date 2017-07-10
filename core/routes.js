import appControllers from "./appControllers"
import responders from "./responder"
let debug = require("debug")('Core:AppControllers')

const routes = (app, globalModules) => {
  debug('export routes')
  const {logger} = globalModules

  let processRequest = appControllers(globalModules)

  const processOptions = {
    attributes: function (req, res, next) {
      return {req, res}
    },
    responders
  }

  const { redirectWithCookies } = responders

  app.get("/", processRequest('homeController', 'main', processOptions))

  app.get("/account", processRequest('accountController', 'main', processOptions))

  app.get("/account/details", processRequest('accountController', 'details', processOptions))

  app.get("/account/:category/get", processRequest('accountController', 'subDetails', processOptions))

  app.get("/account/:category", processRequest('accountController', 'main', processOptions))

  app.get('/myorders', processRequest('accountController', 'main', processOptions))

  app.get("/account/:category/:subCategory", processRequest('accountController', 'main', processOptions))

  app.post("/account/profile/update",  processRequest('accountController', 'updateProfile', processOptions))

  app.post("/account/secret/update",  processRequest('accountController', 'updatePassword', processOptions))

  app.post("/account/address/add",  processRequest('accountController', 'addAddress', processOptions))

  app.post("/account/address/update",  processRequest('accountController', 'updateAddress', processOptions))

  app.post("/account/address/delete",  processRequest('accountController', 'deleteAddress', processOptions))

  app.get("/checkout", processRequest('checkoutController', 'main', processOptions))

  app.get("/checkout/:category", processRequest('checkoutController', 'details', processOptions))

  app.post("/checkout", processRequest('checkoutController', 'post', processOptions))

  app.get("/contact-us", processRequest('contactUsController', 'get', processOptions))

  app.post("/contact-us", processRequest('contactUsController', 'post', processOptions))

  app.get("/forgot-password", processRequest('forgotPasswordController', 'main', processOptions))

  app.post("/forgot-password", processRequest('forgotPasswordController', 'post', processOptions))

  app.get("/login", processRequest('loginController', 'get', processOptions))

  app.post("/login", processRequest('loginController', 'post',
    {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies, html: responders.html }
    }
  ))

  app.get("/order", processRequest('orderController', 'main', processOptions))

  app.get("/order/products", processRequest('orderController', 'main', processOptions))

  app.get("/order/:category", processRequest('orderController', 'main', processOptions))

  app.post('/order/create', processRequest('orderController', 'create', processOptions))

  app.post('/order/process', processRequest('orderController', 'process', processOptions))

  app.post('/order/upload', processRequest('photoInventoryController', 'main', processOptions));

  app.post('/order/confirm', processRequest('orderController', 'confirm', processOptions))

  app.post('/order/album/add', processRequest('orderController', 'addAlbum', processOptions))

  app.post('/order/album/update', processRequest('orderController', 'updateAlbum', processOptions))

  app.post('/order/file/delete', processRequest('orderController', 'deleteFile', processOptions))

  app.get('/orders/:orderid', processRequest('orderController', 'viewOrder', processOptions))

  app.get('/orders', processRequest('orderController', 'viewOrders', processOptions))

  app.get('/orders/:orderid/preview', processRequest('customerOrderController', 'viewPreview', processOptions))

  app.post('/order/customer/notify', processRequest('customerOrderController', 'customerFeedback', processOptions))

  app.get('/order/customer/feedback', processRequest('customerOrderController', 'getReaction', processOptions))

  app.post('/order/customer/adduser', processRequest('customerOrderController', 'addUser', processOptions))

  app.post('/order/customer/deleteuser', processRequest('customerOrderController', 'deactivateUser', processOptions))

  app.post('/order/customer/qualify', processRequest('customerOrderController', 'qualifyImage', processOptions))

  app.post('/order/customer/byuser', processRequest('customerOrderController', 'fetchImagesByUser', processOptions))

  app.post('/order/customer/finalize', processRequest('customerOrderController', 'finalizeOrderByCustomer', processOptions))

  app.get('/order/:users/:orderId', processRequest('customerOrderController', 'viewCustomer', processOptions))

  app.get('/order/:users/:orderId/:image_id', processRequest('customerOrderController', 'viewCustomer', processOptions))

  app.get("/partner", processRequest('partnerController', 'get', processOptions))

  app.post("/partner", processRequest('partnerController', 'post', {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies }
    }
  ))

  app.get("/services", processRequest('ourServicesController', 'main', processOptions))

  app.get("/services/:category", processRequest('ourServicesController', 'main', processOptions))

  app.get("/password-reset/:token", processRequest('passwordResetController', 'main', processOptions))

  app.post("/password-reset/:token", processRequest('passwordResetController', 'post', processOptions))

  app.get("/marketing", processRequest('marketingController', 'main', processOptions))

  app.get("/marketing/:category", processRequest('marketingController', 'main', processOptions))

  app.get("/signout", processRequest('signOutController', 'main', processOptions))

  app.get("/signup", processRequest('signUpController', 'get', processOptions))

  app.post("/signup", processRequest('signUpController', 'post',
    {
      attributes: processOptions.attributes,
      responders: { redirectWithCookies, html: responders.html }
    }
  ))

  app.get("/why-us", processRequest('whyUsController', 'main', processOptions))

  app.get("/landing", processRequest('placeholderController', 'main', processOptions))
}

export default routes
