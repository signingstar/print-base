import { navConfig } from "../header/presenter";
let debug = require("debug")('Modules:Order:Controller');

export let orderController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/order/main.pug';
  		let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      page.set( {
        navConfig,
        promotional_header: true,
        navigational_header: true
      });

      debug('Page params:%s', JSON.stringify(page));

      let html = fn(page);

      responders.html(html);
    }
  }
}
