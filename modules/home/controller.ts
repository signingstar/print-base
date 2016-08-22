import { presenter, origConfig } from "../header/presenter";

const homeController = function({modules} : {modules:any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/home/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      let headerPresenter = presenter({cookies});

      page.set(headerPresenter);

      page.set({
        origConfig,
        promotional_header: true,
        navigational_header: true,
        javascript: 'main',
        stylesheet: 'main',
        title: 'Tisko Digital Printing',
        body_class: 'home'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default homeController;
