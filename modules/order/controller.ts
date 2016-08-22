import { origConfig, presenter } from "../header/presenter";
import ReactComponent from "./react_server";

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

      page.set(headerPresenter);

      let {reactHTML, preloadedState} = ReactComponent(item);
      page.set( {
        origConfig,
        promotional_header: true,
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
    }
  }
}

export default orderController;
