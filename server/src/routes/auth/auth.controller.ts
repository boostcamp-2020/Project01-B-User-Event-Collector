import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

export const authenticateLogin = (req : Request, res : Response, next: NextFunction) => {
    passport.authenticate('login-naver', { session: false }, (err, user) => {
        if (err || !user) return res.status(401).json({ success: false });
        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET || 'jwt_secret');
        res.cookie('token', token);
        return res.redirect(process.env.CLIENT_HOST || 'http://localhost:3000');
    })(req, res, next);
};

export const naverLogin = (req : Request, res : Response, next: NextFunction) => {
    const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=${process.env.STATE}`;
    res.redirect(apiUrl);
};
