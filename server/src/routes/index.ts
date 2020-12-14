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
import eventRouter from './events';
import playEventRouter from './playEvents';
import { authenticateJWT } from './auth';

const router = express.Router();

router.use('/users', userRouter);
router.use('/artists', artistRouter);
router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);
router.use('/library', libraryRouter);
router.use('/playlists', playlistRouter);
router.use('/tracks', trackRouter);
router.use('/albums', albumRouter);
router.use('/mixtapes', mixtapeRouter);
router.use('/events', eventRouter);
router.use('/play-events', playEventRouter);

export default router;
