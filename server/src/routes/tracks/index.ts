import express from 'express';
import * as trackController from './tracks.controller';

const router = express.Router();

router.get('/', trackController.list);
router.get('/:id', trackController.findOne);

export default router;
