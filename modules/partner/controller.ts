const partnerController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
      let srcPath:string = './modules/partner/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      page.set( {
        javascript: 'session',
        stylesheet: 'session',
        title: 'Tisko - Be Our Partner',
        body_class: 'partner'
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default partnerController;
