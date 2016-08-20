import ReactComponent from "./react_server";
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { omit } from "underscore";

import configureStore from "./frontend/store";
import routes from "./frontend/routes";
import AccountDetails from "./mock_data/details";
import { mapUrlPathToInternalCategory } from "./helper";

const accountController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: ({attributes, responders, page} : {attributes: any, responders: any, page: any}) => {
      let {req, res} = attributes;
    	let srcPath:string = './modules/account/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      match({routes, location, history}, (error, redirectLocation, renderProps) => {
        if(renderProps) {
          console.log(`error:${error} | renderProps:${renderProps}`);
          let {reactHTML, preloadedState} = ReactComponent(renderProps, category, history);

          page.set( {
            javascript: 'account',
            stylesheet: 'account',
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

    details: ({attributes, responders, page} : {attributes: any, responders: any, page: any}) => {
      let {req, res} = attributes;
      let { active } = req.query;
      let internalCategory = mapUrlPathToInternalCategory(active);
      console.log(`active:${JSON.stringify(active)} | internalCategory:${internalCategory}`);


      let json = omit(AccountDetails, (value: any, key: string)=> {
        return key === internalCategory;
      });
      responders.json(json);
    }
  }
}

export default accountController;
