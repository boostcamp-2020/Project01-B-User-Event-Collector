import express from 'express';
import * as artistController from './library.artist.controller';

const router = express.Router();

router.get('/', artistController.list);
router.post('/', artistController.create);
router.delete('/', artistController.remove);

export default router;
