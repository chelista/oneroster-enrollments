import {Router} from 'express';

export default function(controller) {
  const router = new Router();

  router.get('/', controller.all);
  router.get('/:id', controller.one);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.patch('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
}
