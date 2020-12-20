import express from 'express';
import * as magazineController from './magazines.controller';

const router = express.Router();

router.get('/', magazineController.list);
router.get('/:id', magazineController.findOne);

export default router;
