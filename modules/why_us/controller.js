import layoutPresenter from "tisko-layout"
import path from "path"

const whyUsController = function({modules}) {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Why Us'

  return {
    main: function({attributes, responders, page}) {
      const {req, res} = attributes
      const {session} = req

      layoutPresenter({session}, page, {jsAsset})

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

export default whyUsController
