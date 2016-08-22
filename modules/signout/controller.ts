const signOutController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/signout/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      res.clearCookie('isLogged');

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Logged out',
        body_class: 'signout'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default signOutController
