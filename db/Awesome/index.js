import r from 'rethinkdb';
import config from '../../config';
// import { getConn, execute, AWESOME, CONN_ERROR_MSG } from '../connect';

export function storeAwesome(awesome) {
  r.connect(config.rethinkdb)
    .then(conn => {
      r.table('awesome').insert(awesome).run(conn)
        .then(res => {
          return res;
        })
        .catch(err => {
          return err;
        });
    });
}

export function getAwesome(num) {
  return new Promise((resolve, reject) => {
    r.connect(config.rethinkdb)
      .then(conn => {
        r.table('awesome').sample(num).run(conn)
          .then(res => {
            return resolve(res);
          })
          .catch(err => {
            return reject(err);
          });
      });
  });
}
