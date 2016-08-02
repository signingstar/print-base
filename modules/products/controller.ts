import { navConfig, customConfig } from "../header/presenter";

export let productsController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let navId = customConfig(req.query.product_type, 'id').id;
    	let srcPath:string = './modules/products/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let html = fn({navConfig, navId, promotional_header: true, navigational_header: true});

      responders.html(html);
    }
  }
}
