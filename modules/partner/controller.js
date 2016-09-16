import headerPresenter from "tisko-layout";
import partnerPresenter from "./presenter";
import path from "path";

const partnerController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      let {cookies} = req;

      headerPresenter({cookies, topNav: false}, page);

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - Be Our Partner',
        body_class: 'partner'
      })

      let html = fn(page);

      responders.html(html);
    },
    post: ({attributes, responders, page}) => {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.query.ref_url);

      refUrl = partnerPresenter(refUrl, true).parsedUri;
      responders.redirectWithCookies(refUrl);
    }
  }
}

export default partnerController;
