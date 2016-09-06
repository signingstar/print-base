import { presenter } from "../header/presenter";
import partnerPresenter from "./presenter";

const partnerController = function({modules}) {
  let {pug, logger} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/partner/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let {cookies} = req;
      let headerPresenter = presenter({cookies});

      page.set(headerPresenter);

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
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
