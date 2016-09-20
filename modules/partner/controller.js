import layoutPresenter from "tisko-layout"
import presenter from "./presenter"
import path from "path"

const controller = ({modules}) => {
  const {pugCompiler, logger, jsAsset, cssAsset} = modules
  const srcPath = path.join(__dirname, './', 'main')
  const renderHTML = pugCompiler(srcPath)
  const title = 'Tisko - Be Our Partner'

  return {
    get: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const {session} = req

      layoutPresenter({session, topNav: false}, page, {jsAsset})

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        body_class: 'partner',
        title
      })

      responders.html(renderHTML(page))
    },

    post: ({attributes, responders, page}) => {
      const {req, res} = attributes
      const refUrl = decodeURI(req.query.ref_url)

      const parsedRefUrl = presenter(refUrl, true).parsedUri
      responders.redirectWithCookies(parsedRefUrl)
    }
  }
}

export default controller
