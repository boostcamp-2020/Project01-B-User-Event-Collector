import express from 'express';
import * as albumController from './library.album.controller';

const router = express.Router();

router.get('/', albumController.list);
router.post('/', albumController.create);
router.delete('/', albumController.remove);

export default router;