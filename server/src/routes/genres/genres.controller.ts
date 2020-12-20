import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Genre from '../../models/Genre';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const GenreRepository = getRepository(Genre);
        const genres = await GenreRepository.find();

        return res.json({
            success: true,
            data: [...genres],
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list };
