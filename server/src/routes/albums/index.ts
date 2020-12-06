import express from 'express';
import * as albumController from './albums.controller';

const router = express.Router();

router.get('/', albumController.list);
router.get('/:id', albumController.findOne);

export default router;
