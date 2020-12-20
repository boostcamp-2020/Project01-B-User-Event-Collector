import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import User from '../../../models/User';
import Album from '../../../models/Album';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    const userId = req.user;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryAlbums'] });
    const album = await manager.findOne(Album, id);

    if (!user || !album) return res.status(404).json({ success: false });

    user.libraryAlbums.push(album);

    await manager.save(user);

    return res.json({
        success: true,
    });
};

const list = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user;
    const userRepository = getRepository(User);
    // const libraryAlbums = await userRepository.findOne(userId, { relations: ['libraryAlbums'] });
    const user = await userRepository.createQueryBuilder('user')
        .leftJoinAndSelect('user.libraryAlbums', 'library_albums')
        .leftJoinAndSelect('library_albums.artist', 'artist')
        .select([
            'user.id',
            'library_albums.id',
            'library_albums.title',
            'library_albums.imageUrl',
            'artist.id',
            'artist.name',
        ])
        .where('user.id = :id', { id: userId })
        .getOne();

    const libraryAlbums = user?.libraryAlbums ? user?.libraryAlbums : [];
    return res.json({
        success: true,
        data: libraryAlbums,
    });
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    const albumId: string = req.params.albumId as string;
    const userId = req.user;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryAlbums'] });

    if (!user) return res.status(401).json({ success: false });

    user.libraryAlbums = user.libraryAlbums.filter((libraryAlbum) => libraryAlbum.id !== +albumId);

    await manager.save(user);

    return res.json({
        success: true,
    });
};

export { create, list, remove };
