import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import News from '../../models/News';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const NewsRepository = getRepository(News);
        const news = await NewsRepository.find();
        return res.json({
            success: true,
            data: [...news],
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

export { list };
