let pug = require('pug');
let navigationConfig = require('../header/presenter');

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;

      console.log(`url_c:${req.url}`);

    	let srcPath:string = './modules/our_services/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn({navigationConfig}));
    }
  }
}
