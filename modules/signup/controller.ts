import { find, pick } from "underscore";

import { presenter } from "./presenter";
import updateUserList from "./update_user_list";

const signUpController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    get: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/signup/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});
      let refUrl = presenter(req.query.ref_url).uriWithRef;

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Register',
        refUrl,
        body_class: 'signup'
      })

      let html = fn(page);

      responders.html(html);
    },

    post: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.query.ref_url);
      let validFields = ['userid', 'username', 'password', 'telephone']

      let signupData = pick(req.body, (value: string, key: string)=> {
        return find(validFields, (field) => field === key);
      });

      updateUserList(signupData, (state: boolean) => {
        if(state) {
          res.cookie('isLogged', true, {maxAge: 60*60*1000});
          refUrl = presenter(refUrl, true).parsedUri;
          responders.redirectWithCookies(refUrl);
        } else {
          let srcPath:string = './modules/signup/main.pug';
          let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

          page.set( {
            javascript: 'session',
            stylesheet: 'session',
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
