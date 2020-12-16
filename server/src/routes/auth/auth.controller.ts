import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const callback = (err: any, user: any, res : Response) => {
    if (err || !user) return res.status(401).json({ success: false });
    const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET || 'jwt_secret');
    res.cookie('token', token);
    return res.redirect(process.env.CLIENT_HOST || 'http://localhost:3000');
};
export const authenticateLogin = (req : Request, res: Response, next: NextFunction) => {
    const loginStrategy = req.url.split('/')[1];
    passport.authenticate(loginStrategy, { session: false, failureRedirect: `${process.env.CLIENTHOST}/login` }, (err, user) => {
        callback(err, user, res);
    })(req, res, next);
};
export const naverLogin = (req : Request, res : Response, next: NextFunction) => {
    const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=${process.env.STATE}`;
    res.redirect(apiUrl);
};
