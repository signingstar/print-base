import headerPresenter from "tisko-header";

const whyUsController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/why_us/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      const title =  'Tisko Digital Printing';


      headerPresenter({cookies}, page);

      page.set({
        promotional_header: false,
        javascript: jsAsset('mainjs'),
        stylesheet: cssAsset('maincss'),
        title,
        body_class: 'why-us'
      });

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default whyUsController;
