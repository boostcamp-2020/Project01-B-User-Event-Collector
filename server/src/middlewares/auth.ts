import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export const authenticateJWT = (req : Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) return next(err);
        if (!user) return next();

        req.user = user.id;
        return next();
    })(req, res, next);
};

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;
    if (!user) return res.status(401).json({ success: false, message: 'Login Required' });

    return next();
};
