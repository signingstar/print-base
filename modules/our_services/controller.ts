import { navConfig, customConfig } from "../header/presenter";

export let ourServicesController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let navId = customConfig(req.query.service_type, 'id').id;
      let srcPath:string = './modules/our_services/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        navConfig,
        navId,
        promotional_header: true,
        navigational_header: true,
        javascript: 'services',
        stylesheet: 'services',
        title: 'Tisko - Our Services'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}
