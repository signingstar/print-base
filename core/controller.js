import { Request, Response } from "express";
import { each, extend, map, object } from "underscore";

import ChainBuilder from "./chain_builder";
import Page from "./page";

let debug = require("debug")('Core:controllers');

const coreController = (controllers, globalModules) => {
  debug('coreController');

  let contextizer = () => {
    let chain = ChainBuilder();

    return {
      register: chain.register,

      execute: (req, res, defaultContext={}) => chain.execute(defaultContext, req, res)
    }
  };

  let {logger} = globalModules;

  let preController = {
    controllers: controllers,
    defaultAttributes: (req) => req.params,
    moduleBuilder: contextizer(),

    getPageForAction: (controllerName, action) => {
      debug('getPageForAction');

      let template = action === 'main' ? controllerName : controllerName + '_' + action;
      return new Page(template);
    },

    getControllerWithContext: (controller, req, res) => {
      debug('getControllerWithContext');

      let modules = preController.moduleBuilder.execute(req, res, {controller: controller});

      extend(modules, globalModules);
      let bootedController = controllers[controller]({modules});

      each(bootedController, (handler, action) => {
        debug('getControllerWithContext iterator');

        bootedController[action] = (args) => {
          logger.info('[CONTROLLER] %s: %s', controller, action);
          args.page = preController.getPageForAction(controller, action);

          return handler(args);
        }
      });

      return {controller: bootedController};
    },

    processRequest: (controllerName, action, options) => {
      debug('processRequest');

      if(options.attributes == null) {
        options.attributes = preController.defaultAttributes;
      }

      return function(req, res, next) {
        let {controller} = preController.getControllerWithContext(controllerName, req, res);

        let responders = object(map(options.responders, (responder, responderName) => {
          const responderWithLogging = (res, next) => {
            let generatedResponder = responder(res, next);

            return function() {
              generatedResponder.apply(this, arguments);
            }
          };

          return [responderName, responderWithLogging(res, next)];
        }));

        controller[action] ({
          attributes: options.attributes(req, res),
          responders: responders
        });
      };
    }
  };

  preController.moduleBuilder.register('controllers', (ctx, req, res) => {
    debug('moduleBuilder.register');

    return {
      controllers: controllers,
      controllerWithContext: (controller) => {
        preController.getControllerWithContext(controller, req, res).controller;
      },

      pageForAction: (controller, action) => {
        preController.getPageForAction(controller, action);
      }
    };
  });

  return preController;
};

export default coreController;
