import express from 'express';
import newsRouter from './news';
import magazineRouter from './magazines';

const router = express.Router();

router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);

export default router;
