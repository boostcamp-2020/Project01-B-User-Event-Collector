import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import User from '../../../models/User';
import Album from '../../../models/Album';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { albumId } = req.body;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryAlbums'] });
    const album = await manager.findOne(Album, albumId);

    if (!user || !album) return res.status(404).json({ success: false });

    user.libraryAlbums.push(album);

    await manager.save(user);

    res.json({
        success: true,
    });
};

const list = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: 인증 구현 후 수정
    const userId = 1;

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
        .getOne();

    const libraryAlbums = user?.libraryAlbums ? user?.libraryAlbums : [];
    res.json({
        success: true,
        data: libraryAlbums,
    });
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    const albumId: string = req.params.albumId as string;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryAlbums'] });

    if (!user) return res.status(401).json({ success: false });

    user.libraryAlbums = user.libraryAlbums.filter((libraryAlbum) => libraryAlbum.id !== +albumId);

    await manager.save(user);

    res.json({
        success: true,
    });
};

export { create, list, remove };
