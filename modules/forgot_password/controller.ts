let pug = require('pug');

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/forgot_password/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn());
    }
  }
}
