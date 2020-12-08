import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Playlist from '../../models/Playlist';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const PlaylistRepository = getRepository(Playlist);
        const mixtapes = await PlaylistRepository.createQueryBuilder('playlist')
            .select([
                'playlist.id',
                'playlist.title',
                'playlist.subTitle',
                'playlist.imageUrl',
            ])
            .where('mixtape = 1')
            .getMany();

        return res.json({ success: true, data: mixtapes });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list };
