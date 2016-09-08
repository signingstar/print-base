const signOutController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/signout/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      res.clearCookie('isLogged');

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - Logged out',
        body_class: 'signout'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default signOutController
