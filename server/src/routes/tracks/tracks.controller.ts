import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Track from '../../models/Track';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const TrackRepository = getRepository(Track);

        const tracks = await TrackRepository.createQueryBuilder('track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .select([
                'track',
                'artist.id',
                'artist.name',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .getMany();

        return res.json({
            success: true,
            data: [...tracks],
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

const findOne = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const TrackRepository = getRepository(Track);

        const track = await TrackRepository.createQueryBuilder('track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .select([
                'track',
                'artist.id',
                'artist.name',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .where('track.id = :id', { id })
            .getOne();

        if (!track) return res.status(404).json({ success: false });

        return res.json({
            success: true,
            data: track,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

export { list, findOne };
