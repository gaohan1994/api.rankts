import * as Router from 'koa-router';
import Index from './src/controllers/index';

const router = new Router();

router.get('/index', Index.index);
router.get('/hello', Index.hello);

export default router;