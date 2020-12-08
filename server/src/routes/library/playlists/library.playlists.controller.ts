import { NextFunction, Request, Response } from 'express';
import { getManager, getRepository } from 'typeorm';
import Playlist from '../../../models/Playlist';
import User from '../../../models/User';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { playlistId } = req.body;
    const userId = 1;
    try {
        const manager = getManager();
        const user = await manager.findOne(User, userId, { relations: ['libraryPlaylists'] });
        const playlist = await manager.findOne(Playlist, playlistId);

        if (!user || !playlist) return res.status(404).json({ success: false });

        user.libraryPlaylists.push(playlist);
        await manager.save(user);

        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

const list = async (req: Request, res: Response, next: NextFunction) => {
    const userId = 2;

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
            .getOne();

        const libraryPlaylists = user?.libraryPlaylists || [];
        return res.json({ success: true, data: libraryPlaylists });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
    const playlistId: string = req.params.playlistId as string;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryPlaylists'] });

    if (!user) return res.status(401).json({ success: false });

    user.libraryPlaylists = user.libraryPlaylists.filter(
        (libraryPlaylist) => libraryPlaylist.id !== +playlistId,
    );

    await manager.save(user);

    res.json({
        success: true,
    });
};

export { create, list, remove };