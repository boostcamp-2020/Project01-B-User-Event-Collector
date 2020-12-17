import express from 'express';
import * as eventController from './events.controller';

const router = express.Router();

router.post('/', eventController.create);
router.get('/', eventController.list);

export default router;
