import express from 'express';
import * as trackController from './library.tracks.controller';

const router = express.Router();

router.get('/', trackController.list);
router.post('/', trackController.create);

export default router;
