import r from 'rethinkdb';
import { execute, getConn } from '../connect';
import config from '../../config';

function createDB() {
  console.log(config);
  r.connect(config.rethinkdb)
    .then(conn => {
      r.dbCreate('cookiejar').run(conn)
        .then(res => {
          console.log('created cookie jar db');
          createTable(conn);
        }).catch(e => {
          console.error(e);
          createTable(conn);
        });
    });
}

function createTable(conn) {
  r.tableCreate('awesome').run(conn)
    .then(res => {
      console.log('created awesome table');
      process.exit();
    });
}

createDB();

// function *createDB () {
//   console.log('hi');
//   const conn = yield getConn();

//   if (!conn) {
//     console.log("Couldn't establish a connection");
//     console.log(conn);
//     process.exit();
//   }

//   let res = yield execute(r.dbCreate('cookiejar'), conn, true);
//   if (res) console.log('created db cookiejar');

//   res = yield execute(r.tableCreate('awesome'), conn, true);
//   if (res) console.log('created quickbooks table');

//   console.log('finishing create DB...');
//   process.exit();
// }

// function runGen (gen) {
//   //const gen = genFn();
//   let res;

//   do {
//     res = gen.next();
//   } while (!res.done)
// }

// // const createGen = createDB();
// // console.log(createGen.next());
// runGen(createDB());
