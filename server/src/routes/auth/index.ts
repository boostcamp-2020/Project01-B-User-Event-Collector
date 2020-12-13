import express, { Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

export const authenticateLogin = (req : Request, res : Response, next: Function) => {
    passport.authenticate('login-naver', { session: false }, (err, user) => {
        if (err || !user) return res.status(401).json({ success: false });
        const token = jwt.sign({ ...user.dataValues }, process.env.JWT_SECRET || 'jwt_secret');
        res.cookie('token', token);
        return res.status(200).redirect('http://localhost:3000');
    })(req, res, next);
};

export default router;
