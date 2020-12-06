import express from 'express';
import * as trackController from './library.tracks.controller';

const router = express.Router();

router.post('/', trackController.create);

export default router;
