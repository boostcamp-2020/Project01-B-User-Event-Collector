import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Artist from '../../models/Artist';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ArtistRepository = getRepository(Artist);
        const artists = await ArtistRepository.find({ relations: ['genre'] });
        return res.json({
            success: true,
            data: [...artists],
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
        const ArtistRepository = getRepository(Artist);
        // TODO: 연관된 아티스트 목록 추가
        const artist = await ArtistRepository.createQueryBuilder('artist')
            .leftJoinAndSelect('artist.genre', 'genre')
            .leftJoinAndSelect('artist.tracks', 'track')
            .leftJoinAndSelect('artist.albums', 'album')
            .leftJoinAndSelect('track.artist', 'track_artist')
            .leftJoinAndSelect('track.album', 'track_album')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
            .where('artist.id = :id', { id })
            .select([
                'artist',
                'track',
                'album.id',
                'album.title',
                'genre.name',
                'album.imageUrl',
                'track_album.id',
                'track_album.title',
                'track_album.imageUrl',
                'track_artist.id',
                'track_artist.name',
            ])
            .getOne();

        if (!artist) return res.status(404).json({ success: false });

        return res.json({
            success: true,
            data: artist,
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list, findOne };
