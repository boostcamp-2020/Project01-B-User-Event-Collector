import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
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

export { list };
