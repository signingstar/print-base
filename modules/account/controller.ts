import ReactComponent from "./react_server";
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from "./frontend/store";
import routes from "./frontend/routes"

const accountController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/account/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let location = req.url;
      let {category} = req.params;
      const memoryHistory = createMemoryHistory(req.url);
      const store = configureStore(memoryHistory);
      const history = syncHistoryWithStore(memoryHistory, store);

      match({history, routes, location}, (error, redirectLocation, renderProps) => {
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
      });

    }
  }
}

export default accountController;
