import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { omit } from "underscore";

import ReactComponent from "./react_server";
import { presenter } from "../header/presenter";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";
import AccountDetails from "./mock_data/details";

let debug = require("debug")('Account:controllers');


const accountController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: ({attributes, responders, page}) => {
      let {req, res} = attributes;
      let srcPath = './modules/account/main.pug';
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
            javascript: jsAsset('accountjs'),
            stylesheet: cssAsset('accountcss'),
            title: 'Tisko - My Account',
            body_class: 'account',
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

    details: ({attributes, responders, page}) => {
      let {req, res} = attributes;
      let { pathname } = req.query;

      pathname = pathname.replace('/account/', '');
      let json = omit(AccountDetails, (value, key) => key === pathname);

      responders.json(json);
    }
  }
}

export default accountController;
