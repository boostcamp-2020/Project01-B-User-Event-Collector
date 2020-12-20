import { log } from 'console';
import express from 'express';
import * as mixtapesController from './library.mixtapes.controller';

const router = express.Router();

router.get('/', mixtapesController.list);
export default router;
