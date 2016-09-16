import headerPresenter from "tisko-layout";
import path from "path";

const contactUsController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let { req, res } = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      const title = 'Tisko - Contact Us';

      headerPresenter({topNav: false}, page);

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
        body_class: 'contact-us'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default contactUsController;
