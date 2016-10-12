import layoutPresenter from "tisko-layout"
import path from "path"

const homeController = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko Digital Printing'

  return {
    main: function({attributes, responders, page}) {
      const {req, res} = attributes
      const {session: {user}} = req

      layoutPresenter({user}, page, {jsAsset, logger})

      page.set({
        promotional_header: false,
        showFooter: true,
        javascript: jsAsset('mainjs'),
        stylesheet: cssAsset('maincss'),
        title,
        body_class: 'home'
      })

      responders.html(renderHTML(page))
    }
  }
}

export default homeController
