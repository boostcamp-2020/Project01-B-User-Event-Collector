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
            success: true,
            data: [...albums],
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

// const findOne = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;

//     try {
//         const MagazineRepository = getRepository(Magazine);

//         const magazine = await MagazineRepository.createQueryBuilder('magazine')
//             .leftJoinAndSelect('magazine.playlist', 'playlist')
//             .leftJoinAndSelect('playlist.tracks', 'track')
//             .leftJoinAndSelect('track.album', 'album')
//             .leftJoinAndSelect('track.artist', 'artist')
//             .where('magazine.id = :id', { id })
//             .select([
//                 'magazine',
//                 'playlist.id',
//                 'playlist.description',
//                 'track',
//                 'artist.id',
//                 'artist.name',
//                 'album.id',
//                 'album.title',
//                 'album.imageUrl',
//             ])
//             .getOne();

//         if (!magazine) return res.status(404).json({ success: false });

//         return res.json({
//             success: true,
//             data: magazine,
//         });
//     } catch (err) {
//         return res.status(500).json({ success: false });
//     }
// };

export { list };
