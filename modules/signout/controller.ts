export let signOutController = function({modules}:{modules:any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page}:{attributes:any, responders:any, page:any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/signout/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      responders.html(fn());
    }
  }
}
