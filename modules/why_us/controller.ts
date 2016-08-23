import { origConfig, presenter } from "../header/presenter";

const whyUsController = function({modules} : {modules:any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/why_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;

      page.set(presenter({cookies}));

      page.set({
        origConfig,
        promotional_header: false,
        navigational_header: true,
        javascript: 'main',
        stylesheet: 'main',
        title: 'Tisko Digital Printing',
        body_class: 'why-us'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default whyUsController;
