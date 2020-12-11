import express from 'express';
import * as playlistsContoller from './playlists.controller';

const router = express.Router();

router.get('/', playlistsContoller.list);
router.get('/:id', playlistsContoller.listById);
router.post('/', playlistsContoller.create);
router.post('/track', playlistsContoller.addTracks);
router.post('/album', playlistsContoller.addAlbum);
router.post('/mixtape', playlistsContoller.addPlaylist);
router.post('/playlist', playlistsContoller.addPlaylist);
export default router;
