var pug = require('pug');
var path = require('path');
var navigationConfig = require('../../config/navigation-config.json');

module.exports = function(){
  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/home/main.pug';
  		var fn = pug.compileFile(srcPath , {cache: false, pretty: true});
  		var html = fn({navigationConfig});
      responders.html(html);
    }
  }
}
