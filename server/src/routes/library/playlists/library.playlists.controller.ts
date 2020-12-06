import { NextFunction, Request, Response } from 'express';
import { getManager } from 'typeorm';
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

export { create };
