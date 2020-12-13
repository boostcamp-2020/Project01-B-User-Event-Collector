import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login/naver', passport.authenticate('login-naver'), (req, res, next) => {
    const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=${process.env.STATE}`;
    res.redirect(apiUrl);
});

export default router;
