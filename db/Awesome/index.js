import r from 'rethinkdb';
import config from '../../config';
// import { getConn, execute, AWESOME, CONN_ERROR_MSG } from '../connect';

export function storeAwesome(awesome) {
  r.connect(config.rethinkdb)
    .then(conn => {
      r.table('awesome').insert(awesome)
        .then(res => return res)
        .catch(err => return err);
    });
}
