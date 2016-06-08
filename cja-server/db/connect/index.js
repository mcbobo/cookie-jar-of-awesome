import r from 'rethinkdb';
import config from '../../config';

export const CONN_ERROR_MSG = "Couldn't establish a connection";

// Database Tables
export const AWESOME = 'quickbooks';

// Exports the connection function unexecuted, which when executed will return a promise that has the connection
export const connect = () => r.connect(config.rethinkdb);

export const execute = function * (fn, conn) {
  console.log(fn);
  try {
    return yield fn.run(conn);
  } catch (err) {
    console.error(err);
    return;
  }
};

// This just returns the connection so you don't have to call
// asyncRun(connect) on it
export const getConn = function * () {
  console.log('in get conn');
  try {
    return yield connect();
  } catch (err) {
    console.error(err);
    return;
  }
};

export default execute;

