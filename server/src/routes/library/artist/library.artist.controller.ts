import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import User from '../../../models/User';
import Artist from '../../../models/Artist';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.body;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryArtists'] });
    const artist = await manager.findOne(Artist, artistId);

    if (!user || !artist) return res.status(404).json({ success: false });

    user.libraryArtists.push(artist);

    await manager.save(user);

    res.json({
        success: true,
    });
};

const list = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const userRepository = getRepository(User);
    // const libraryArtists = await userRepository.findOne(userId, { relations: ['libraryArtists'] });
    const user = await userRepository.createQueryBuilder('user')
        .leftJoinAndSelect('user.libraryArtists', 'library_artists')
        .select([
            'user.id',
            'library_artists.id',
            'library_artists.name',
            'library_artists.imageUrl',
        ])
        .getOne();

    const libraryArtists = user?.libraryArtists ? user?.libraryArtists : [];

    res.json({
        success: true,
        data: libraryArtists,
    });
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    const artistId: string = req.body.artistId as string;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryArtists'] });

    if (!user) return res.status(401).json({ success: false });

    user.libraryArtists = user.libraryArtists.filter((libraryArtist) => libraryArtist.id !== +artistId);

    await manager.save(user);

    res.json({
        success: true,
    });
};

export { create, list, remove };
