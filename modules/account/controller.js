import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { omit } from "underscore";
import path from "path";

import ReactComponent from "./react_server";
import headerPresenter from "tisko-layout";
import configureStore from "./frontend/store";
import routes from "./frontend/routes";
import AccountDetails from "./mock_data/details";

let debug = require("debug")('Account:controllers');

const controller = ({modules}) => {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;
  const isSecured = true;
  const title = 'Tisko - My Account';

  return {
    main: ({attributes, responders, page}) => {
      const {req, res} = attributes;
      const srcPath = path.join(__dirname, './', 'main');
      const fn = pugCompiler(srcPath);

      const {cookies, url:location, params:{category}} = req;

      const memoryHistory = createMemoryHistory(location);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      const {isLogged = false} = headerPresenter({cookies, topNav: false}, page);

      if(isSecured && !isLogged) {
        responders.redirectForAuthentication(location, "authenticate", logger);
        return;
      }

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          debug(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, category, history);

          page.set( {
            javascript: jsAsset('accountjs'),
            stylesheet: cssAsset('accountcss'),
            body_class: 'account',
            title,
            reactHTML,
            preloadedState
          });

          const html = fn(page);

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

export default controller;
