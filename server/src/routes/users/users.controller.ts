import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../../models/User';
import bcrypt from 'bcrypt';

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

export const joinUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.pw, 10);
    try {
        const UserRepository = getRepository(User);
        const invalidEmail = await UserRepository.findOne({
            where: {
                email: email
            }
        });
        if(invalidEmail) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        await UserRepository.insert(user);

        return res.status(200).json(null);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};