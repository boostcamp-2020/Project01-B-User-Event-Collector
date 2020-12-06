import express from 'express';
import trackRouter from './tracks';

const router = express.Router();

router.use('/tracks', trackRouter);

export default router;
