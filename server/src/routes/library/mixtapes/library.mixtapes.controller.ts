import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../models/User';

const list = async (req: Request, res: Response, next: NextFunction) => {
    const userId = 1;

    try {
        const UserRepository = getRepository(User);
        const user = await UserRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.libraryPlaylists', 'library_playlists')
            .select([
                'user.id',
                'library_playlists.id',
                'library_playlists.title',
                'library_playlists.subTitle',
                'library_playlists.imageUrl',
            ])
            .where('user.id = :id', { id: userId })
            .where('mixtape = 1')
            .getOne();

        const libraryPlaylists = user?.libraryPlaylists || [];
        return res.json({ success: true, data: libraryPlaylists });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

export { list };
