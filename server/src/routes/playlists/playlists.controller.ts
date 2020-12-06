import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import * as libraryPlaylist from '../library/playlists/library.playlists.controller';
import Playlist from '../../models/Playlist';
import User from '../../models/User';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlists = await PlaylistRepository.find();
        return res.json({
            success: true,
            data: [...playlists],
        });
    } catch (err) {
        return res.status(500).json({ success: false, data: [] });
    }
};

const listById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlist = await PlaylistRepository.createQueryBuilder('playlist')
            .leftJoinAndSelect('playlist.tracks', 'track')
            .leftJoinAndSelect('track.artist', 'artist')
            .leftJoinAndSelect('track.album', 'album')
            .select([
                'playlist.id',
                'playlist.title',
                'playlist.subTitle',
                'playlist.description',
                'playlist.imageUrl',
                'track.id',
                'track.title',
                'track.lyrics',
                'artist.id',
                'artist.name',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .getOne();

        return res.json({ success: true, data: playlist });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, data: [] });
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: userId 처리
    const { title } = req.body;
    console.log(title);
    const userId = 1;

    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlist = new Playlist();

        playlist.title = title;
        await PlaylistRepository.insert(playlist);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

export { list, listById, create };
