import express from 'express';
import * as playlistsContoller from './playlists.controller';

const router = express.Router();

router.get('/', playlistsContoller.list);
router.get('/:id', playlistsContoller.listById);
router.post('/', playlistsContoller.create);
router.post('/tracks', playlistsContoller.addTracks);
export default router;
