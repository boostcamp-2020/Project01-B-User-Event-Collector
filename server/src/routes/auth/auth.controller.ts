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
