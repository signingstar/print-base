import headerPresenter from "tisko-layout";
import path from "path";

const whyUsController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      let {cookies} = req;
      const title =  'Tisko Digital Printing';


      headerPresenter({cookies}, page);

      page.set({
        promotional_header: false,
        showFooter: true,
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
