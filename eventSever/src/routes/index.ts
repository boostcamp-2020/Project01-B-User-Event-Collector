import express from 'express';
import eventRouter from './events';

const router = express.Router();

router.use('/events', eventRouter);

export default router;
