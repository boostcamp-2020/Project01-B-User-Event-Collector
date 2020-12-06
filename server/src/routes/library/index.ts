import express from 'express';
import trackRouter from './tracks';
import albumRouter from './album';
import artistRouter from './artist';

const router = express.Router();

router.use('/tracks', trackRouter);
router.use('/album', albumRouter);
router.use('/artist', artistRouter);

export default router;
