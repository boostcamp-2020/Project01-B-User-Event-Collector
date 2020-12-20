import express from 'express';
import * as chartController from './chart.controller';

const router = express.Router();

router.get('/', chartController.list);

export default router;
