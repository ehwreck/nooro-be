import type { Router } from 'express';
import express from 'express';

const router: Router = express.Router();
import { index, create, update, destroy } from '../controllers/tasks.controller.js';

router.route('/')
      .get(index)
      .post(create);

router.route('/:taskId')
      .put(update)
      .delete(destroy);

export default router;
