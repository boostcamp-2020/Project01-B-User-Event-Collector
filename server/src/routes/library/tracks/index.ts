import express from 'express';
import * as trackController from './library.tracks.controller';

const router = express.Router();

router.get('/', trackController.list);
router.post('/', trackController.create);
router.delete('/', trackController.remove);

export default router;
