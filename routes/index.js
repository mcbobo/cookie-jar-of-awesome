import koaRouter from 'koa-router';
import { storeAwesome, getAwesome } from '../db/Awesome';

const router = koaRouter();

router.post('/awesome', function * (next) {
  const awesome = this.request.body;

  this.body = storeAwesome(awesome);
});

router.get('/awesome', function * (next) {
  this.body = yield getAwesome(10);
});

router.get('/', function * (next) {
  this.body = "yo";
});

export default router;
