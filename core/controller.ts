import {Request, Response} from 'express';
import {each, map, object} from 'underscore';
import * as chainBuilder from './chain_builder';
import {Page} from './page';

module.exports = function(controllers:any) {
  let contextizer = function() {
    let chain = chainBuilder();

    return {
      register: chain.register,
      execute: function(req:Request, res: Response, defaultContext={}) {
        req.requestModules = req.requestModules || chain.execute(defaultContext, req, res);
      }
    }
  };

  let preController = {
    controllers: controllers,
    defaultAttributes: function (req:Request, res:Response) {
      return req.params;
    },
    moduleBuilder: contextizer()
  };

  preController.moduleBuilder.register('controllers', function(ctx:any, req:Request, res: Response) {
    return {
      controllers: controllers,
      controllerWithContext: function(controller:string) {
        preController.getControllerWithContext(controller, req, res).controller;
      },
      pageForAction: function(controller:string, action:string, modules = ctx) {
        preController.getPageForAction(controller, action, modules);
      }
    };
  });

  preController.getPageForAction = function(controllerName:string, action: string) {
    let template:string = action === 'main' ? controllerName : controllerName + '_' + action;
    return new Page(template);
  };

  preController.getControllerWithContext = function(controller:string, req: Request, res: Response) {
    let modules = preController.moduleBuilder.execute(req, res, {controller: controller});
    let bootedController = controllers[controller]();
    each(bootedController, function(handler, action:string) {
      bootedController[action] = function(args:any) {
        if(args.page == null) {
          args.page = preController.getPageForAction(controller, action);
        }
        return handler(args);
      }
    });
    return {controller: bootedController};
  };

  preController.processRequest = function(controllerName:string, action:string, options={}) {
    if(options.attributes == null) {
      options.attributes = preController.defaultAttributes;
    }

    return function(req:Request, res:Response, next) {
      let {controller} = preController.getControllerWithContext(controllerName, req, res);
      let responders = object(map(options.responders, function(responder, responderName) {
        let responderWithLogging = function(res:Response, next) {
          let generatedResponder = responder(res, next);
          return function() {
            generatedResponder.apply(null, arguments);
          }
        };
        return [responderName, responderWithLogging(res, next)];
      }));
      controller[action] ({
        attributes: options.attributes(req, res),
        responders: responders
      });
    };
  };

  return preController;
};
