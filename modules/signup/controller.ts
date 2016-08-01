let pug = require('pug');
import {presenter} from './presenter';

module.exports = function(){
  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/signup/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let retUrl = presenter(req.query.ref_url);
      let html = fn({retUrl});

      responders.html(html);
    },

    post: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let ref_url = req.query.ref_url;

      responders.redirectWithCookies(ref_url);
    }
  }
}
