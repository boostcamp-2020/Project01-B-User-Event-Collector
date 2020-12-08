import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Magazine from '../../models/Magazine';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const MagazineRepository = getRepository(Magazine);
        const magazines = await MagazineRepository.find();
        return res.json({
            success: true,
            data: [...magazines],
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
        const MagazineRepository = getRepository(Magazine);

        const magazine = await MagazineRepository.createQueryBuilder('magazine')
            .leftJoinAndSelect('magazine.playlist', 'playlist')
            .leftJoinAndSelect('playlist.tracks', 'track')
            .leftJoinAndSelect('track.album', 'album')
            .leftJoinAndSelect('track.artist', 'artist')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
            .where('magazine.id = :id', { id })
            .select([
                'magazine',
                'playlist.id',
                'track',
                'artist.id',
                'artist.name',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .getOne();

        if (!magazine) return res.status(404).json({ success: false });

        return res.json({
            success: true,
            data: magazine,
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list, findOne };
