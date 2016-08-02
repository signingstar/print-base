import { coreController } from "./controller";

import { loginController } from "../modules/login/controller";
import { homeController } from "../modules/home/controller";
import { signUpController } from "../modules/signup/controller";
import { forgotPasswordController } from "../modules/forgot_password/controller";
import { orderController } from "../modules/order/controller";
import { ourServicesController } from "../modules/our_services/controller";
import { productsController } from "../modules/products/controller";
import { contactUsController } from "../modules/contact_us/controller";
import { accountController } from "../modules/account/controller";
import { signOutController } from "../modules/signout/controller";
import { partnerController } from "../modules/partner/controller";

let controllersList = {
  loginController,
  homeController,
  signUpController,
  forgotPasswordController,
  orderController,
  ourServicesController,
  productsController,
  contactUsController,
  accountController,
  signOutController,
  partnerController
};

export let appControllers = function(globalModules: {}) {
  let {processRequest} = coreController(controllersList, globalModules);
  return processRequest;
}
