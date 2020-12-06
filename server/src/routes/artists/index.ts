import express from 'express';
import * as artistController from './artists.controller';

const router = express.Router();

router.get('/', artistController.list);
router.get('/:id', artistController.findOne);

export default router;
