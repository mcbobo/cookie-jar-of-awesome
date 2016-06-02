import koa from 'koa';
import koaRouter from 'koa-router';

const app = koa();
const router = koaRouter();

router.get('/', function * (next) {
  this.body = "hi";
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');
