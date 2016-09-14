import { find, pick } from "underscore";

import { presenter } from "./presenter";
import headerPresenter from "tisko-header";
import updateUserList from "./update_user_list";

const signUpController = function({modules}) {
  let {pug, logger, jsAsset, cssAsset} = modules;

  return {
    get: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath = './modules/signup/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let refUrl = presenter(req.query.ref_url).uriWithRef;
      let {cookies} = req;
      let title = 'Tisko - Register';


      let {isLogged = false} = headerPresenter({cookies, topNav:false}, page);

      if(isLogged) {
        responders.redirectWithCookies("/");
        return;
      }

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
        refUrl,
        body_class: 'signup'
      })

      let html = fn(page);

      responders.html(html);
    },

    post: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.query.ref_url);
      let validFields = ['userid', 'username', 'password', 'telephone']

      let signupData = pick(req.body, (value, key)=> {
        return find(validFields, (field) => field === key);
      });

      updateUserList(signupData, (state) => {
        if(state) {
          res.cookie('isLogged', true, {maxAge: 60*60*1000});
          refUrl = presenter(refUrl, true).parsedUri;
          responders.redirectWithCookies(refUrl);
        } else {
          let srcPath = './modules/signup/main.pug';
          let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

          page.set( {
            javascript: jsAsset('sessionjs'),
            stylesheet: cssAsset('sessioncss'),
            title: 'Tisko - Register',
            refUrl,
            body_class: 'signup',
            message: 'Couldn\`t signed up'
          })

          let html = fn(page);

          responders.html(html);
        }
      });
    }
  }
}

export default signUpController;
