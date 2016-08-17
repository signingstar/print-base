import { origConfig, customConfig } from "../header/presenter";

const productsController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let navId = customConfig(req.query.product_type, 'id').id;
    	let srcPath:string = './modules/products/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        origConfig,
        navId,
        promotional_header: true,
        navigational_header: true,
        javascript: 'products',
        stylesheet: 'services',
        title: 'Tisko - Our Products'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default productsController;
