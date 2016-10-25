import layoutPresenter from "tisko-layout"
import path from "path"

const controller = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Thanks'

  return {
    main: function({attributes, responders, page}) {
      const {req, res} = attributes
      const {session: {user}} = req

      layoutPresenter({user}, page, {jsAsset})

      page.set({
        promotional_header: false,
        showFooter: true,
        javascript: jsAsset('mainjs'),
        stylesheet: cssAsset('maincss'),
        title,
        body_class: 'why-us'
      })

      responders.html(renderHTML(page))
    }
  }
}

export default controller
