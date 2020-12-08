import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Album from '../../models/Album';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const AlbumRepository = getRepository(Album);
        const albums = await AlbumRepository.createQueryBuilder('album')
            .leftJoinAndSelect('album.artist', 'artist')
            .select(['album', 'artist.id', 'artist.name'])
            .getMany();

        return res.json({
            success: !!albums,
            data: albums || [],
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

const findOne = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    // TODO: 인증 구현 후 수정
    const userId = 1;
    try {
        const AlbumRepository = getRepository(Album);
        const album = await AlbumRepository.createQueryBuilder('album')
            .leftJoinAndSelect('album.artist', 'artist')
            .leftJoinAndSelect('album.tracks', 'track')
            .leftJoinAndSelect('track.artist', 'track_artist')
            .leftJoinAndSelect('track.album', 'track_album')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
            .select([
                'album', 'artist.id', 'artist.name', 'track.id', 'track.title', 'track.lyrics',
                'track_artist.id', 'track_artist.name',
                'track_album.id', 'track_album.title', 'track_album.imageUrl',
            ])
            .where('album.id = :id', { id })
            .getOne();

        return res.json({
            success: !!album,
            data: album || {},
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list, findOne };
