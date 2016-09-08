import { pick } from "underscore";

import { presenter } from "./presenter";
import verifyUser from "./verify_login";

const loginController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/login/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title: 'Tisko - Login',
        refUrl: presenter(req.query.ref_url).uriWithRef,
        body_class: 'login'
      })

      let html = fn(page);

      responders.html(html);
    },

    post: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let refUrl = req.query.ref_url;

      let {userid, password} = pick(req.body, (value: string, key: string)=> {
        return key === 'userid' || key === 'password';
      });

      verifyUser(userid, password, (isValid: boolean) => {
        if(isValid) {
          res.cookie('isLogged', true, {maxAge: 60*60*1000});
          refUrl = presenter(refUrl, true).parsedUri;
          responders.redirectWithCookies(refUrl);
        } else {
          let srcPath = './modules/login/main.pug';
          let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

          page.set( {
            javascript: jsAsset('sessionjs'),
            stylesheet: cssAsset('sessioncss'),
            title: 'Tisko - Login',
            refUrl: presenter(req.query.ref_url),
            body_class: 'login',
            message: 'Invalid login or password'
          })

          let html = fn(page);

          responders.html(html);
        }
      });
    }
  }
}

export default loginController;
