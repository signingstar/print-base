let pug = require('pug');

module.exports = function(){
  return {
    login_form: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/login/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn());
    },

    login_action: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/login/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn());
    }
  }
}
