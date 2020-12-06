import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Magazine from '../../models/Magazine';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const MagazineRepository = getRepository(Magazine);
        const magazines = await MagazineRepository.find();
        return res.json({
            success: true,
            data: [...magazines],
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

export { list };
