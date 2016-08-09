import { navConfig } from "../header/presenter";
import ReactComponent from "./react_server";

let debug = require("debug")('Modules:Order:Controller');

export let orderController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/order/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let {reactHTML, preloadedState} = ReactComponent();
      page.set( {
        navConfig,
        promotional_header: true,
        navigational_header: true,
        reactHTML,
        preloadedState,
        javascript: 'order',
        stylesheet: 'order',
        title: 'Tisko Digital Printing'
      });

      debug('Page params:%s', JSON.stringify(page));

      let html = fn(page);

      responders.html(html);
    }
  }
}
