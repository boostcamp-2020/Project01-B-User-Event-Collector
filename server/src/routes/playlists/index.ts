import express from 'express';
import * as playlistsContoller from './playlists.controller';

const router = express.Router();

router.get('/', playlistsContoller.list);
router.get('/:id', playlistsContoller.listById);

export default router;
