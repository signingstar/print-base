import { headerPresenter, origConfig } from "../header/presenter"

const whyUsController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/why_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;

      page.set(headerPresenter({cookies}));

      page.set({
        origConfig,
        promotional_header: false,
        navigational_header: true,
        javascript: jsAsset('mainjs'),
        stylesheet: cssAsset('maincss'),
        title: 'Tisko Digital Printing',
        body_class: 'why-us'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default whyUsController;
