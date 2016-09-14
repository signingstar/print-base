import headerPresenter from "tisko-header";

const contactUsController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let { req, res } = attributes;
      let srcPath = './modules/contact_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      headerPresenter({topNav: false}, page);

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - Contact Us',
        body_class: 'contact-us'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default contactUsController;
