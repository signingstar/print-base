import headerPresenter from "tisko-header";
import path from "path";

const signOutController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      res.clearCookie('isLogged');

      headerPresenter({}, page);

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
