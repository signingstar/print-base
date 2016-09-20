import headerPresenter from "tisko-layout";
import path from "path";

const contactUsController = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules;
  const srcPath = path.join(__dirname, './', 'main');
  const renderHTML = pugCompiler(srcPath);

  return {
    main: function({attributes, responders, page}) {
      const { req, res } = attributes;
      const title = 'Tisko - Contact Us';

      headerPresenter({session: req.session, topNav: false}, page, {jsAsset});

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
        body_class: 'contact-us'
      })

      const html = renderHTML(page);

      responders.html(html);
    }
  }
}

export default contactUsController;
