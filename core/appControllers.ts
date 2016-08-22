import { coreController } from "./controller";

let debug = require("debug")('Core:AppControllers');

import accountController from "../modules/account/controller";
import contactUsController from "../modules/contact_us/controller";
import forgotPasswordController from "../modules/forgot_password/controller";
import homeController from "../modules/home/controller";
import loginController from "../modules/login/controller";
import orderController from "../modules/order/controller";
import ourServicesController from "../modules/services/controller";
import passwordResetController from "../modules/password_reset/controller";
import partnerController from "../modules/partner/controller";
import productsController from "../modules/products/controller";
import signOutController from "../modules/signout/controller";
import signUpController from "../modules/signup/controller";
import whyUsController from "../modules/why_us/controller";

let controllersList = {
  accountController,
  contactUsController,
  forgotPasswordController,
  homeController,
  loginController,
  orderController,
  ourServicesController,
  partnerController,
  passwordResetController,
  productsController,
  signOutController,
  signUpController,
  whyUsController
};

export let appControllers = function(globalModules: any) {
  debug('export method appControllers');
  let {processRequest} = coreController(controllersList, globalModules);
  return processRequest;
}
