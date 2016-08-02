import { navConfig } from "../header/presenter";

export let orderController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/order/main.pug';
  		let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let html = fn({navConfig, promotional_header: true});

      responders.html(html);
    }
  }
}
