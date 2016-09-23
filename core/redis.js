import RedisConnect from "connect-redis"

const RedisConnectSession = RedisConnect(session)

const RedisClientConfig = {
  host: '127.0.0.1',
  port: 6379,
  prefix: 'session:',
  logErrors: true
}

const store = new RedisConnectSession(RedisClientConfig)

export default store
