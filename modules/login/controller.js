import { pick } from "underscore";
import path from "path";

import { presenter } from "./presenter";
import verifyUser from "./verify_login";
import headerPresenter from "tisko-header";
let debug = require("debug")("Modules:loginController");

const loginController = function({modules}) {
  let {pugCompiler, logger, jsAsset, cssAsset} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = path.join(__dirname, './', 'main');
      let fn = pugCompiler(srcPath);
      let {cookies} = req;
      let title = 'Tisko - Login';

      let {isLogged = false} = headerPresenter({cookies, topNav:false}, page);

      if(isLogged) {
        responders.redirectWithCookies("/");
        return;
      }

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
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
          responders.redirectWithCookies(decodeURIComponent(refUrl));
        } else {
          let srcPath = path.join(__dirname, './', 'main');
          let fn = pugCompiler(srcPath);

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
