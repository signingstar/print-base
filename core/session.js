import session from "express-session"
import RedisConnect from "connect-redis"
import crypto from "crypto"
import RedisConfig from "./redis_config"

const RedisConnectSession = RedisConnect(session)

const RedisClientConfig = Object.assign({}, RedisConfig, {
  prefix: 'session:'
})

const store = new RedisConnectSession(RedisClientConfig)
const sessionConfig = {
  name: 'wibele',
  secret: crypto.createHmac('sha256', 'secret-week-1').digest('hex'),
  saveUninitialized: false,
  resave: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  unset: 'destroy',
  store
}

const expressSession = (app) => {
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sessionConfig.cookie.secure = true // serve secure cookies
  }

  return session(sessionConfig)
}

export default expressSession
