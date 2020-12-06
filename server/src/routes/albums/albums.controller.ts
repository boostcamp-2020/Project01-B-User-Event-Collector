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
    try {
        const AlbumRepository = getRepository(Album);
        const album = await AlbumRepository.createQueryBuilder('album')
            .leftJoinAndSelect('album.artist', 'artist')
            .leftJoinAndSelect('album.tracks', 'track')
            .select(['album', 'artist.id', 'artist.name', 'track.id', 'track.title'])
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
