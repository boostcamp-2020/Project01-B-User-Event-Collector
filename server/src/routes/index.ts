import express from 'express';
import userRouter from './user';
const router = express.Router();

router.use('/users', userRouter);

export default router;