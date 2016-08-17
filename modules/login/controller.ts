import { presenter } from "./presenter";

const loginController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    get: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/login/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Login',
        refUrl: presenter(req.query.ref_url),
        body_class: 'login'
      })

      let html = fn(page);

      responders.html(html);
    },

    post: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let refUrl = req.query.ref_url;

      responders.redirectWithCookies(refUrl);
    }
  }
}

export default loginController;
