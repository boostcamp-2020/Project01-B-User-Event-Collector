import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();
export const authenticateJWT = (req : Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err || !user) return next();
        // TODO : err handling
        req.user = user.id;
        return next();
    })(req, res, next);
};
export const authenticateLogin = (req : Request, res : Response, next: NextFunction) => {
    passport.authenticate('login-naver', { session: false }, (err, user) => {
        if (err || !user) return res.status(401).json({ success: false });
        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET || 'jwt_secret');
        res.cookie('token', token);
        return res.status(200).redirect('http://localhost:3000');
    })(req, res, next);
};

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;
    if (!user) return res.redirect('http://localhost:3000');

    return next();
};
router.get('/naver/callback', authenticateLogin);
export default router;
