import koa from 'koa';
import koaRouter from 'koa-router';

const app = koa();

router = koaRouter();

router.get('/', async function(ctx, next) {
  ctx.body = "hi";
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);
