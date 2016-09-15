import coreController from "./controller";

let debug = require("debug")('Core:AppControllers');

import accountController from "../modules/account/controller";
import checkoutController from "../modules/checkout/controller";
import contactUsController from "../modules/contact_us/controller";
import forgotPasswordController from "user-sessions/lib/forgot_password/controller";
import homeController from "../modules/home/controller";
import loginController from "user-sessions/lib/login/controller";
import marketingController from "../modules/marketing/controller";
import orderController from "order-page";
import ourServicesController from "../modules/services/controller";
import passwordResetController from "user-sessions/lib/password_reset/controller";
import partnerController from "../modules/partner/controller";
import signOutController from "user-sessions/lib/signout/controller";
import signUpController from "user-sessions/lib/signup/controller";
import whyUsController from "../modules/why_us/controller";
import photoInventoryController from "photo-inventory";

let controllersList = {
  accountController,
  checkoutController,
  contactUsController,
  forgotPasswordController,
  homeController,
  loginController,
  marketingController,
  orderController,
  ourServicesController,
  partnerController,
  passwordResetController,
  signOutController,
  signUpController,
  whyUsController,
  photoInventoryController
};

const appControllers = (globalModules) => {
  debug('export method appControllers');
  let {processRequest} = coreController(controllersList, globalModules);
  return processRequest;
}

export default appControllers;
