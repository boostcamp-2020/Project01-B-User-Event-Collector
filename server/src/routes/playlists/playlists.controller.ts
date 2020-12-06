import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import Playlist from '../../models/Playlist';

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
        await PlaylistRepository.createQueryBuilder('playlist')
            .insert()
            .into(Playlist)
            .values({
                title,
            })
            .execute();

        return res.json({ succee: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};
export { list, listById, create };
