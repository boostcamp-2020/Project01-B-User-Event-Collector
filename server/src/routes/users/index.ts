import express from 'express';
import passport from 'passport';
import { getManager } from 'typeorm';
import User from '../../models/User';

const router = express.Router();

router.get('/login/naver', passport.authenticate('login-naver'), (req, res, next) => {
    const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=${process.env.STATE}`;
    res.redirect(apiUrl);
});

router.get('/', async (req, res, next) => {
    console.log(req.user);
    try {
        if(req.user){
            const manager = getManager();
            const user = await manager.findOne(User, req.user);
            return res.status(200).json(user);
        } else {
            res.status(200).json(null);
        }
    } catch (err) {
        console.log(err);
    }
});

export default router;
