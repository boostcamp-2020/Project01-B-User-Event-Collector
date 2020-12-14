import express from 'express';
import * as trackController from './library.tracks.controller';
import { authenticateJWT } from '../../auth';

const router = express.Router();

router.get('/', trackController.list);
router.post('/', trackController.create);
router.delete('/:trackId', trackController.remove);

export default router;
