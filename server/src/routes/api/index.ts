import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { PostRouter } from './post-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/posts', PostRouter);

export default router;
