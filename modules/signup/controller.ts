import {presenter} from "./presenter";

export let signUpController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    get: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/signup/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let refUrl = presenter(req.query.ref_url);

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Register',
        refUrl
      })

      let html = fn(page);

      responders.html(html);
    },

    post: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.query.ref_url);

      responders.redirectWithCookies(refUrl);
    }
  }
}
