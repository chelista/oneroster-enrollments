import {Router} from 'express';
import controller from '../controllers/stats';

const router = new Router();

router.get('/', controller.all);

export default router;
