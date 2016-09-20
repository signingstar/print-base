import session from "express-session";
import RedisConnect from "connect-redis";
import crypto from "crypto";

const RedisConnectSession = RedisConnect(session);

const RedisClientConfig = {
  host: '127.0.0.1',
  port: 6379,
  prefix: 'session:',
  logErrors: true
}

const store = new RedisConnectSession(RedisClientConfig);
const sessionConfig = {
  name: 'wibele',
  secret: crypto.createHmac('sha512', 'secret-week-1').digest('hex'),
  saveUninitialized: false,
  resave: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  unset: 'destroy',
  store
};

const expressSession = (app) => {
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sessionConfig.cookie.secure = true // serve secure cookies
  }

  return session(sessionConfig);
}

export default expressSession;
