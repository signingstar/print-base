import async from "async"
import layoutPresenter from "tisko-layout"
import path from "path"

import insertQuery from "../../database/api/insert_query"
import filterAndValidate from "./presenters/filter_validate"

const controller = ({modules}) => {
  const {pugCompiler, logger, jsAsset, cssAsset, queryDb, Mailer} = modules

  const getUserObject = (session, responders) => {
    const {user} = session

    if(!user || !user.id) {
      return responders.redirectForAuthentication(location, "authenticate", logger)
    }

    return user
  }

  return {
    get: ({attributes, responders, page}) => {
      const { req, res } = attributes
      const {session: {user}} = req
      const srcPath = path.join(__dirname, './', 'main')
      const renderHTML = pugCompiler(srcPath)
      const title = 'Tisko - Contact Us'

      layoutPresenter({user, topNav: false}, page, {jsAsset})

      page.set( {
        javascript: jsAsset('sessionjs'),
        stylesheet: cssAsset('sessioncss'),
        title,
        body_class: 'contact-us'
      })

      responders.html(renderHTML(page))
    },

    post: ({attributes, responders, page}) => {
      const { req, res } = attributes
      const {session: {user}, body} = req

      const {username, userid, telephone, query_type, query} = body
      const message = 'Success'
      const { err, queryData } = filterAndValidate(req.body)

      async.waterfall(
        [
          (done) => {
            insertQuery(queryData, {logger, queryDb}, (err, res) => {
              done(err, res.id)
            })
          },
          (queryId, done) => {
            responders.redirectWithoutCookies('/landing', logger)
            done(err, queryId)
          },
          (queryId, done) => {
            const mailOptions = {
              to: userid,
              from: 'care@tisko.com',
              subject: 'Thank You for contacting us',
              text: 'You are receiving this because Anil has created request on behalf of you.\n\n' +
                        'Please click on the following link, or paste this into your browser to view the details:\n\n' +
                        'If you did not request this, please ignore this email and chill out :D.\n'
            }

            Mailer(mailOptions)((err, info) => {
              if(err) {
                req.flash('An error occured whie sending the reset email')
              } else {
                console.log('Contact-Us Email successfully sent')
              }
            })
          }
        ],
        (err) => loggerr.info(err)
      )
    }
  }
}

export default controller
