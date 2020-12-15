import express from 'express';
import * as authController from './auth.controller';

const router = express.Router();

router.get('/naver/callback', authController.authenticateLogin);

export default router;
