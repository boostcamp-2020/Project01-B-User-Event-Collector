import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import User from '../../../models/User';
import Track from '../../../models/Track';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    const userId = req.user;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryTracks'] });
    const track = await manager.findOne(Track, id);

    if (!user || !track) return res.status(404).json({ success: false });

    user.libraryTracks.push(track);

    await manager.save(user);

    return res.json({
        success: true,
    });
};

const list = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user;

    const userRepository = getRepository(User);
    // const libraryTracks = await userRepository.findOne(userId, { relations: ['libraryTracks'] });
    const user = await userRepository.createQueryBuilder('user')
        .leftJoinAndSelect('user.libraryTracks', 'library_tracks')
        .leftJoinAndSelect('library_tracks.album', 'album')
        .leftJoinAndSelect('library_tracks.artist', 'artist')
        .loadRelationCountAndMap('library_tracks.liked', 'library_tracks.likeUsers', 'user',
            (qb) => qb.andWhere('user.id = :userId', { userId }))
        .select([
            'user.id',
            'library_tracks.id',
            'library_tracks.title',
            'library_tracks.lyrics',
            'library_tracks.playtime',
            'artist.id',
            'artist.name',
            'album.id',
            'album.title',
            'album.imageUrl',
        ])
        .getOne();

    const libraryTracks = user?.libraryTracks ? user?.libraryTracks : [];

    res.json({
        success: true,
        data: libraryTracks,
    });
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    const trackId: string = req.params.trackId as string;
    const userId = req.user;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryTracks'] });

    if (!user) return res.status(401).json({ success: false });

    user.libraryTracks = user.libraryTracks.filter((libraryTrack) => libraryTrack.id !== +trackId);

    await manager.save(user);

    return res.json({
        success: true,
    });
};

export { create, list, remove };
