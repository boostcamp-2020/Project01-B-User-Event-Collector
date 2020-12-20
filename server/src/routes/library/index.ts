import express from 'express';
import trackRouter from './tracks';
import playlistsRouter from './playlists';
import albumRouter from './album';
import artistRouter from './artist';
import mixtapeRouter from './mixtapes';

const router = express.Router();

router.use('/tracks', trackRouter);
router.use('/playlists', playlistsRouter);
router.use('/albums', albumRouter);
router.use('/artists', artistRouter);
router.use('/mixtapes', mixtapeRouter);

export default router;
