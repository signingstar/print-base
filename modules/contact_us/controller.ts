var pug = require('pug');
var path = require('path');

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/contact_us/main.pug';
  		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
  		var html = fn();
      responders.html(html);
    }
  }
}
