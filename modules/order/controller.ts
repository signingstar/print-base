import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { origConfig, presenter } from "../header/presenter";
import ReactComponent from "./react_server";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";

let debug = require("debug")('Modules:Order:Controller');

const orderController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;
  let srcPath:string = './modules/order/main.pug';

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let { mode, item } = req.query;
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
        console.log(`routes:${JSON.stringify(renderProps.params)} `);

        if(renderProps) {
          let {reactHTML, preloadedState} = ReactComponent(renderProps, history);
          page.set( {
            origConfig,
            promotional_header: false,
            navigational_header: true,
            reactHTML,
            preloadedState,
            javascript: 'order',
            stylesheet: 'order',
            title: 'Tisko Digital Printing',
            body_class: 'order'
          });

          debug('Page params:%s', JSON.stringify(page));

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

    post: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {

    }
  }
}

export default orderController;
