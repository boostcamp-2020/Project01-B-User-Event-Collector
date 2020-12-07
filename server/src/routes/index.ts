import express from 'express';
import artistRouter from './artists';
import newsRouter from './news';
import magazineRouter from './magazines';
import libraryRouter from './library';
import playlistRouter from './playlists';
import albumRouter from './albums';
import trackRouter from './tracks';

const router = express.Router();

router.use('/artists', artistRouter);
router.use('/news', newsRouter);
router.use('/magazines', magazineRouter);
router.use('/library', libraryRouter);
router.use('/playlists', playlistRouter);
router.use('/tracks', trackRouter);
router.use('/albums', albumRouter);

export default router;
