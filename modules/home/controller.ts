let pug = require('pug');
import {navConfig} from '../header/presenter';

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/home/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let html = fn({navConfig, promotional_header: true, navigational_header: true});

      responders.html(html);
    }
  }
}
