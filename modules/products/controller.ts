import { origConfig, presenter } from "../header/presenter";
import mapUrlToSection from "./helper.ts";

const productsController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let visible_section = mapUrlToSection('products', req.query.category);
      let srcPath:string = './modules/products/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      let headerPresenter = presenter({cookies});

      page.set(headerPresenter);

      page.set( {
        origConfig,
        visible_section,
        promotional_header: true,
        navigational_header: true,
        javascript: 'products',
        stylesheet: 'services',
        title: 'Tisko - Our Products',
        body_class: 'products'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default productsController;
