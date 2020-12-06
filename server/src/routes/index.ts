import express from 'express';
import artistRouter from './artists';
import newsRouter from './news';
import magazineRouter from './magazines';
import libraryRouter from './library';

const router = express.Router();

router.use('/artists', artistRouter);
router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);
router.use('/library', libraryRouter);

export default router;
