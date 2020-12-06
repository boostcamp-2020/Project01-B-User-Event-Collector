import express from 'express';
import trackRouter from './tracks';
import playlistsRouter from './playlists';

const router = express.Router();

router.use('/tracks', trackRouter);
router.use('/playlists', playlistsRouter);
export default router;
