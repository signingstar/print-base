import pg from "pg";

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
const config = {
  user: 'postgres', //env var: PGUSER
  database: 'user-account', //env var: PGDATABASE
  password: 'grespost', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


//this initializes a connection pool
const pool = new pg.Pool(config);

const queryDb = (query, params, modules, cb) => {
  const { logger } = modules;
  const callback = cb;

  pool.connect((err, client, done) => {
    if(err) {
      console.error('error fetching client from pool', err);
      callback(err);
      return;
    }

    client.query(query, params, (err, result) => {
      done();

      if(err) {
        console.error('error running query', err);
      }

      callback(err, result);
    });
  });
}

pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error('idle client error', err.message, err.stack)
});

export default queryDb;
