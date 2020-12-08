import { Request, Response, NextFunction } from 'express';
import { getManager, getRepository } from 'typeorm';
import * as libraryPlaylist from '../library/playlists/library.playlists.controller';
import * as TrackController from '../tracks/tracks.controller';
import Playlist from '../../models/Playlist';
import Track from '../../models/Track';
import Artist from '../../models/Artist';

const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlists = await PlaylistRepository.find();
        return res.json({
            success: true,
            data: [...playlists],
        });
    } catch (err) {
        return res.status(500).json({ success: false, data: [] });
    }
};

const listById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    // TODO: 인증 구현 후 수 정
    const userId = 1;
    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlist = await PlaylistRepository.createQueryBuilder('playlist')
            .leftJoinAndSelect('playlist.tracks', 'track')
            .leftJoinAndSelect('track.artist', 'artist')
            .leftJoinAndSelect('track.album', 'album')
            .loadRelationCountAndMap('track.liked', 'track.likeUsers', 'user',
                (qb) => qb.andWhere('user.id = :userId', { userId }))
            .select([
                'playlist.id',
                'playlist.title',
                'playlist.subTitle',
                'playlist.description',
                'playlist.imageUrl',
                'track',
                'artist.id',
                'artist.name',
                'album.id',
                'album.title',
                'album.imageUrl',
            ])
            .where('playlist.id = :id', { id })
            .getOne();

        const relatedArtistIds = [...new Set(playlist?.tracks.map((track) => track.artist.id))];

        const ArtistRepository = getRepository(Artist);
        const relatedArtists = await ArtistRepository.createQueryBuilder('artist')
            .where('artist.id IN (:relatedArtistIds)', { relatedArtistIds })
            .getMany();

        return res.json({ success: true, data: { ...playlist, relatedArtists } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, data: [] });
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;

    try {
        const PlaylistRepository = getRepository(Playlist);
        const playlist = new Playlist();

        playlist.title = title;
        await PlaylistRepository.insert(playlist);

        req.body = {
            playlistId: playlist.id,
        };
        return await libraryPlaylist.create(req, res, next);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

const insertTracks = async (playlistId: number, tracks: Track[]) :Promise<boolean> => {
    try {
        const manager = getManager();
        const playlist = await manager.findOne(Playlist, playlistId, { relations: ['tracks'] });
        const track = await manager.findByIds(Track, tracks);

        if (!playlist || !track) return false;

        playlist.tracks.push(...track);
        await manager.save(playlist);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
const trackListById = async (id: number) => {
    try {
        const PlaylistRepository = getRepository(Playlist);
        const tracks = await PlaylistRepository.createQueryBuilder('playlist')
            .leftJoinAndSelect('playlist.tracks', 'track')
            .select([
                'playlist.id',
                'track.id',
            ])
            .where('playlist.id = :id', { id })
            .getOne();
        if (!tracks) return null;
        return tracks;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const addTracks = async (req: Request, res: Response, next: NextFunction) => {
    const { playlistId, tracks } = req.body;

    try {
        const result = await insertTracks(playlistId, tracks);
        if (result) res.json({ success: true });
        return res.status(500).json({ success: false });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

const addAlbum = async (req: Request, res: Response, next: NextFunction) => {
    const { playlistId, albumId } = req.body;
    try {
        const tracks = await TrackController.listByAlbumId(albumId);
        if (!tracks) return res.status(404).json({ success: false });

        const result = await insertTracks(playlistId, tracks);
        if (result) return res.json({ success: true });
        return res.status(500).json({ success: false });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};

const addPlaylist = async (req: Request, res: Response, next: NextFunction) => {
    const { id, playlistId } = req.body;
    try {
        const playlist = await trackListById(playlistId);
        const tracks = playlist?.tracks || null;

        if (!tracks) return Error();

        const result = await insertTracks(id, tracks);
        if (result) return res.json({ success: true });
        return Error();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
};
export {
    list, listById, create, addTracks, addAlbum, addPlaylist,
};
