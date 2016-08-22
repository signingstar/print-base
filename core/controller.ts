import { Request, Response } from "express";
import { each, extend, map, object } from "underscore";

import { ChainBuilder} from "./chain_builder";
import { Page } from "./page";

let debug = require("debug")('Core:controllers');

export function coreController(controllers: any, globalModules: any) {
  debug('coreController');

  let contextizer = function() {
    let chain = ChainBuilder();

    return {
      register: chain.register,

      execute: function(req:Request, res: Response, defaultContext={}) {
        return chain.execute(defaultContext, req, res);
      }
    }
  };

  let {logger} = globalModules;

  let preController = {
    controllers: controllers,
    defaultAttributes: (req: Request) => req.params,
    moduleBuilder: contextizer(),

    getPageForAction: (controllerName: string, action: string) => {
      debug('getPageForAction');

      let template:string = action === 'main' ? controllerName : controllerName + '_' + action;
      return new Page(template);
    },

    getControllerWithContext: (controller: string, req: Request, res: Response) => {
      debug('getControllerWithContext');

      let modules = preController.moduleBuilder.execute(req, res, {controller: controller});

      extend(modules, globalModules);
      let bootedController = controllers[controller]({modules});

      each(bootedController, function(handler: (args: any)=>any, action: string) {
        debug('getControllerWithContext iterator');

        bootedController[action] = function(args: any) {
          logger.info('[CONTROLLER] %s: %s', controller, action);
          args.page = preController.getPageForAction(controller, action);

          return handler(args);
        }
      });

      return {controller: bootedController};
    },

    processRequest: (controllerName: string, action: string, options: {attributes: any, responders: {}}) => {
      debug('processRequest');

      if(options.attributes == null) {
        options.attributes = preController.defaultAttributes;
      }

      return function(req: Request, res: Response, next: ()=>any) {
        let {controller} = preController.getControllerWithContext(controllerName, req, res);

        let responders = object(map(options.responders, function(responder: any, responderName: string) {
          let responderWithLogging = function(res: Response, next: ()=>any) {
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

  preController.moduleBuilder.register('controllers', (ctx: any, req: Request, res: Response) => {
    debug('moduleBuilder.register');

    return {
      controllers: controllers,
      controllerWithContext: function(controller: string) {
        preController.getControllerWithContext(controller, req, res).controller;
      },

      pageForAction: function(controller: string, action: string) {
        preController.getPageForAction(controller, action);
      }
    };
  });

  return preController;
};
