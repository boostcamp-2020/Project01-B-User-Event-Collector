import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../../models/User';

export const getLoginedUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user) {
            const UserRepository = getRepository(User);
            const user = await UserRepository.findOne(req.user);
            return res.status(200).json(user);
        }
        return res.status(200).json(null);
    } catch (err) {
        return res.status(500).json(null);
    }
};
