import { navConfig } from "../header/presenter";

export let homeController = function({modules} : {modules:any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/home/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set({
        navConfig,
        promotional_header: true,
        navigational_header: true,
        javascript: 'main',
        stylesheet: 'main',
        title: 'Tisko Digital Printing'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}
