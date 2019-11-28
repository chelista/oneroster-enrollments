import {Router} from 'express';
import controller from '../controllers/school';

const router = new Router();

router.get('/', controller.all);
router.get('/:id', controller.select);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
