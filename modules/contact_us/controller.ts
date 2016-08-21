import { origConfig } from "../header/presenter";

const contactUsController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let { req, res } = attributes;
    	let srcPath:string = './modules/contact_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: 'contact',
        stylesheet: 'session',
        title: 'Tisko - Register',
        origConfig,
        body_class: 'contact-us'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default contactUsController;
