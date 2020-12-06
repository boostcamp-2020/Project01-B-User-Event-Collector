import express from 'express';
import newsRouter from './news';
import magazineRouter from './magazines';
import libraryRouter from './library';


const router = express.Router();

router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);
router.use('/library', libraryRouter);

export default router;
