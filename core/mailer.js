import nodemailer from "nodemailer"
import sgTransport from "nodemailer-sendgrid-transport"

const options = {
  auth: {
    api_user: 'anilkeshari',
    api_key: 'bde0garh'
  }
}

const templates = {
  'forgot-password': {
    subjectLine: 'Tisko Password Reset',
    content: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            `http://{host}/password-reset/{token}` + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  },
  'password-reset': {
    subjectLine: 'Your password has been changed',
    content:'Hello,\n\n' +
            'This is a confirmation that the password for your account {email} has just been changed.\n'
  }
}

const Mailing = (...args) => {
  const client = nodemailer.createTransport(sgTransport(options))

  return (cb) => client.sendMail(...args, (err, info) => cb(err, info))
}

export default Mailing
