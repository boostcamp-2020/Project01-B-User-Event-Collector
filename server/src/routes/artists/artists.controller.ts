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
    try {
        const ArtistRepository = getRepository(Artist);
        // TODO: 연관된 아티스트 목록 추가
        const artist = await ArtistRepository.createQueryBuilder('artist')
            .leftJoinAndSelect('artist.genre', 'genre')
            .leftJoinAndSelect('artist.tracks', 'track')
            .leftJoinAndSelect('artist.albums', 'album')
            .where('artist.id = :id', { id })
            .select([
                'artist',
                'track',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .getOne();

        return res.json({
            success: true,
            data: artist,
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list, findOne };
