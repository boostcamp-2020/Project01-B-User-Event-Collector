import express from 'express';
import * as genreController from './genres.controller';

const router = express.Router();

router.get('/', genreController.list);

export default router;
