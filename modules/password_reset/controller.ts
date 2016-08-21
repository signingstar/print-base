const passwordResetController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/password_reset/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Password Reset',
        body_class: 'password-reset'
      })

      let html = fn(page);

      responders.html(html);
    },

    reset_password: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let refUrl = decodeURI(req.protocol + '://' + req.get('host'));

      responders.redirectWithCookies(refUrl);

    }
  }
}

export default passwordResetController;
