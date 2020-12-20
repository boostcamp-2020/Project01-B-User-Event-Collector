import express from 'express';
import eventRouter from './events';
import playEventRouter from './playEvents';

const router = express.Router();

router.use('/events', eventRouter);
router.use('/play-events', playEventRouter);

export default router;
