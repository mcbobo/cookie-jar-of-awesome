import koaRouter from 'koa-router';
import { storeAwesome, getAwesome } from '../db/Awesome';

const router = koaRouter();

router.post('/awesome', function * (next) {
  const awesome = this.request.body;
  console.log('Storing awesome...', awesome);

  this.body = yield storeAwesome(awesome);
  this.type = 'json';
});

router.get('/awesome', function * (next) {
  console.log('getting awesome');

  this.body = yield getAwesome(10);
  this.type = 'json';
});

router.get('/', function * (next) {
  // TODO: Make this a page that has some info on how to use it
  this.body = "Welcome to the Cookie Jar of Awesome Server";
});

export default router;
