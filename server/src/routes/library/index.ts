import express from 'express';
import trackRouter from './tracks';
import playlistsRouter from './playlists';
import albumRouter from './album';
import artistRouter from './artist';


const router = express.Router();

router.use('/tracks', trackRouter);
router.use('/playlists', playlistsRouter);
router.use('/album', albumRouter);
router.use('/artist', artistRouter);

export default router;
