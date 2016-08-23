import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import ReactComponent from "./react_server";
import { presenter, origConfig } from "../header/presenter";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";

let debug = require("debug")('Services:controllers');

const ourServicesController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/services/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      let headerPresenter = presenter({cookies});

      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      page.set(headerPresenter);
      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, history);

          page.set( {
            origConfig,
            promotional_header: false,
            navigational_header: true,
            javascript: 'services',
            stylesheet: 'services',
            title: 'Tisko - Our Services',
            body_class: 'our-services',
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

export default ourServicesController;
