import type { Router } from 'express';
import express from 'express';

const router: Router = express.Router();
import { index, show, create, update, destroy } from '../controllers/tasks.controller.js';

router.route('/')
      .get(index)
      .post(create);

router.route('/:taskId')
      .get(show)
      .put(update)
      .delete(destroy);

export default router;
