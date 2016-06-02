import koaRouter from 'koa-router';
import { storeAwesome } from '../db/Awesome';

const router = koaRouter();

router.post('/awesome', function * (next) {
  console.log(this.request.body);
  const awesome = this.request.body.awesome;

  this.body = storeAwesome(awesome);
});

router.get('/', function * (next) {
  this.body = "yo";
});

export default router;
