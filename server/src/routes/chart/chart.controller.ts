import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Track from '../../models/Track';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const TrackRepository = getRepository(Track);

        let tracks = await TrackRepository.createQueryBuilder('track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .leftJoin('track.likeUsers', 'likeUsers')
            .select([
                'track.id',
                'track.title',
                'artist.id',
                'artist.name',
                'album.id',
                'album.imageUrl',
            ])
            .addSelect('COUNT(likeUsers.id)', 'userLikesCount')
            .groupBy('track.id')
            .orderBy('userLikesCount', 'DESC')
            .limit(100)
            .getMany();

        tracks = tracks?.map((track, idx) => ({ ...track, rank: idx + 1 }));

        return res.json({
            success: !!tracks,
            data: tracks || [],
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

export { list };
