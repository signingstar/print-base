import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { omit } from "underscore";

import ReactComponent from "./react_server";
import { presenter } from "../header/presenter";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";
import AccountDetails from "./mock_data/details";

let debug = require("debug")('Checkout:controllers');


const checkoutController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: ({attributes, responders, page} : {attributes: any, responders: any, page: any}) => {
      let {req, res} = attributes;
      let srcPath:string = './modules/checkout/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let {cookies} = req;
      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);
      let headerPresenter = presenter({cookies});

      page.set(headerPresenter);

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, category, history);

          page.set( {
            javascript: 'checkout',
            stylesheet: 'checkout',
            title: 'Tisko - Checkout',
            body_class: 'checkout',
            reactHTML,
            preloadedState
          });

          let html = fn(page);

          responders.html(html);
        } else if (redirectLocation) {
          let redirectionPath = redirectLocation.pathname + redirectLocation.search;
          logger.info(`Redirecting to: ${redirectionPath}`);
          res.redirect(302, redirectionPath);
        }
        else {
          logger.info(`renderProps is not passed`);
          responders.error();
        }
      });
    },

    post: ({attributes, responders, page} : {attributes: any, responders: any, page: any}) => {
      let {req, res} = attributes;
      let srcPath:string = './modules/checkout/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let {cookies} = req;
      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);
      let headerPresenter = presenter({cookies});

      page.set(headerPresenter);

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, category, history);

          page.set( {
            javascript: 'checkout',
            stylesheet: 'checkout',
            title: 'Tisko - Checkout',
            body_class: 'checkout',
            reactHTML,
            preloadedState
          });

          let html = fn(page);

          responders.html(html);
        } else if (redirectLocation) {
          let redirectionPath = redirectLocation.pathname + redirectLocation.search;
          logger.info(`Redirecting to: ${redirectionPath}`);
          res.redirect(302, redirectionPath);
        }
        else {
          logger.info(`renderProps is not passed`);
          responders.error();
        }
      });      
    }
  }
}

export default checkoutController;