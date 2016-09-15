import headerPresenter from "tisko-header";
import path from "path";

const forgotPasswordController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);

      headerPresenter({}, page);

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - password reset',
        body_class: 'forgot-password'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default forgotPasswordController;
