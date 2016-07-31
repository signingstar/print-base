let pug = require('pug');
import {navConfig, customConfig} from '../header/presenter';

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let navId = customConfig(req.query.service_type, ['id']).id;
    	let srcPath:string = './modules/products/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn({navConfig, navId}));
    }
  }
}
