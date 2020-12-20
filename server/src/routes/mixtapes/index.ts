import express from 'express';
import * as mixtapesController from './mixtapes.controller';

const router = express.Router();

router.get('/', mixtapesController.list);
export default router;
