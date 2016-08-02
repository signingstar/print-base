import { presenter } from "./presenter";

export let loginController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    get: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/login/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let refUrl = presenter(req.query.ref_url);
      let html = fn({refUrl});

      responders.html(html);
    },

    post: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let refUrl = req.query.ref_url;

      responders.redirectWithCookies(refUrl);
    }
  }
}
