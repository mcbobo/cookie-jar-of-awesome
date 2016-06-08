import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes';

const app = koa();

app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');
