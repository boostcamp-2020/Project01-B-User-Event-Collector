import express from 'express';
import newsRouter from './news';
import libraryRouter from './library';

const router = express.Router();

router.use('/news', newsRouter);
router.use('/library', libraryRouter);

export default router;
