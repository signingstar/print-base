import { presenter, origConfig } from "../header/presenter";
import mapUrlToSection from "./helper.ts";

const ourServicesController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let visible_section = mapUrlToSection('our-services', req.query.category);
      let srcPath:string = './modules/our_services/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      let headerPresenter = presenter({cookies});

      page.set( {
        origConfig,
        visible_section,
        promotional_header: true,
        navigational_header: true,
        javascript: 'services',
        stylesheet: 'services',
        title: 'Tisko - Our Services',
        body_class: 'our-services'
      });

      page.set(headerPresenter);

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default ourServicesController;
