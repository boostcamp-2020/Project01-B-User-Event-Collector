import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../../models/User';
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
    const userId = req.user;
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
                'album', 'artist.id', 'artist.name', 'track',
                'track_artist.id', 'track_artist.name',
                'track_album.id', 'track_album.title', 'track_album.imageUrl',
            ])
            .where('album.id = :id', { id })
            .getOne();

        const UserRepository = getRepository(User);
        const userLiked = await UserRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.libraryAlbums', 'library_albums')
            .where('library_albums.id = :id', { id })
            .getOne();

        const relatedAlbums = await AlbumRepository.createQueryBuilder('album')
            .leftJoinAndSelect('album.artist', 'artist')
            .where('album.id != :id and artist.id = :artistId', { id, artistId: album?.artist.id })
            .select(['album', 'artist.id', 'artist.name'])
            .getMany();

        return res.json({
            success: true,
            data: { ...album, liked: !!userLiked, relatedAlbums },
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

export { list, findOne };
