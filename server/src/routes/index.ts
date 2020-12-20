import express from 'express';
import userRouter from './users';
import artistRouter from './artists';
import newsRouter from './news';
import magazineRouter from './magazines';
import libraryRouter from './library';
import playlistRouter from './playlists';
import albumRouter from './albums';
import trackRouter from './tracks';
import mixtapeRouter from './mixtapes';
import chartRouter from './chart';
import genreRouter from './genres';
import { authenticateJWT, checkAuth } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateJWT);
router.use('/users', userRouter);
router.use('/artists', artistRouter);
router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);
router.use('/library', checkAuth, libraryRouter);
router.use('/playlists', playlistRouter);
router.use('/tracks', trackRouter);
router.use('/albums', albumRouter);
router.use('/mixtapes', mixtapeRouter);
router.use('/chart', chartRouter);
router.use('/genres', genreRouter);

export default router;
