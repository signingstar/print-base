import redis from "redis"
import RedisConfig from "./redis_config"


export default redis.createClient(RedisConfig)
