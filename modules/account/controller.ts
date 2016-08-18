import ReactComponent from "./react_server";

const accountController = function({modules} : {modules: any}) {
  let {pug, logger} = modules;

  return {
    main: function({attributes, responders, page} : {attributes: any, responders: any, page: any}) {
      let {req, res} = attributes;
    	let srcPath:string = './modules/account/main.pug';
      let fn = pug.compileFile(srcPath , {cache: false, pretty: true});

      let {reactHTML, preloadedState} = ReactComponent();

      page.set( {
        javascript: 'account',
        stylesheet: 'account',
        title: 'Tisko - My Account',
        body_class: 'account',
        reactHTML,
        preloadedState
      })

      let html = fn(page);

      responders.html(html);
    }
  }
}

export default accountController;
