import express from 'express';
import * as newsController from './news.controller';

const router = express.Router();

router.get('/', newsController.list);

export default router;
