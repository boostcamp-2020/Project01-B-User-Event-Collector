import express from 'express';
import passport from 'passport';
import * as authController from './auth.controller';

const router = express.Router();

router.get('/naver/callback', authController.authenticateLogin);
router.get('/naver-login', passport.authenticate('login-naver'), authController.naverLogin);

export default router;
