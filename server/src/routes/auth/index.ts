import express from 'express';
import passport from 'passport';
import * as authController from './auth.controller';

const router = express.Router();

router.get('/naver/callback', authController.authenticateLogin);
router.get('/naver-login', passport.authenticate('naver'), authController.naverLogin);
router.post('/local-login', authController.authenticateLogin);
export default router;
