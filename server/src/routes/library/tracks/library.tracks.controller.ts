import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import User from '../../../models/User';
import Track from '../../../models/Track';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { trackId } = req.body;
    // TODO: 인증 구현 후 수정
    const userId = 1;

    const manager = getManager();

    const user = await manager.findOne(User, userId, { relations: ['libraryTracks'] });
    const track = await manager.findOne(Track, trackId);

    if (!user || !track) return res.status(404).json({ success: false });

    user.libraryTracks.push(track);

    await manager.save(user);

    res.json({
        success: true,
    });
};

export { create };
