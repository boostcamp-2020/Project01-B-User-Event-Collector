import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Track from '../../models/Track';

const list = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: 인증 구현 후 수정
    const userId = 1;
    try {
        const TrackRepository = getRepository(Track);

        const tracks = await TrackRepository.createQueryBuilder('track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
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
            success: !!tracks,
            data: tracks || [],
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
        });
    }
};

const findOne = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    // TODO: 인증 구현 후 수정
    const userId = 1;
    try {
        const TrackRepository = getRepository(Track);

        const track = await TrackRepository.createQueryBuilder('track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
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
const listByAlbumId = async (id:number) : Promise<Track[]> => {
    try {
        const TrackRepository = getRepository(Track);
        const tracks = TrackRepository.createQueryBuilder('track')
            .select(['track.id'])
            .where('track.albumId = :id', { id })
            .getMany();

        return tracks;
    } catch (err) {
        console.error(err);
        return [];
    }
};
export { list, findOne, listByAlbumId };
