import layoutPresenter from "tisko-layout"
import path from "path"

const controller = ({modules}) => {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Contact Us'

  return {
    main: ({attributes, responders, page}) => {
      const { req, res } = attributes

      layoutPresenter({session: req.session, topNav: false}, page, {jsAsset})

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
        body_class: 'contact-us'
      })

      responders.html(renderHTML(page))
    }
  }
}

export default controller
