import headerPresenter from "tisko-header";
import partnerPresenter from "./presenter";

const partnerController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/partner/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
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
