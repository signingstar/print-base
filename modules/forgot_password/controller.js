const forgotPasswordController = function({modules}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/forgot_password/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - password reset',
        body_class: 'forgot-password'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default forgotPasswordController;
