import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import path from "path";

import ReactComponent from "./react_server";
import headerPresenter from "tisko-layout";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";

let debug = require("debug")('Services:controllers');

const ourServicesController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      let {cookies} = req;
      const title = 'Tisko - Our Services';

      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      headerPresenter({cookies}, page);

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, history);

          page.set( {
            promotional_header: false,
            showFooter: true,
            javascript: jsAsset('servicesjs'),
            stylesheet: cssAsset('servicescss'),
            body_class: 'our-services',
            title,
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
