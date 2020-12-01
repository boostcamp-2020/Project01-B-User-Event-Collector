import React from 'react';
import LibraryCardList from './LibraryCardList';

export default {
    title: 'LibraryCardList',
    component: LibraryCardList,
};

const MixtapesData = Array(9).fill({
    src: 'https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/',
    href: 'localhost:3000',
    title: `최애 믹스테잎`,
    artist: 'Lana Del Rey, 이영지, Dua Lipa'
});

const AritstData = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    name: '이영지',
    href: 'localhost:3000',
});

const AlbumData = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/album/004/491/4491829.jpg?type=r360Fll&v=20200808020212',
    href: 'localhost:3000',
    title: 'Rio Loves Tokyo Part 1',
    artist: '김승민'
});

const PlaylistData = Array(9).fill({
    src: 'https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png',
    href: 'localhost:3000',
    title: 'VIBE 추천 플레이리스트',
    description: 'VIBE'
});

export const Mixtape = () => <LibraryCardList variant="mixtape" items={MixtapesData} />;

export const Artist = () => <LibraryCardList variant="artist" items={AritstData} />;

export const Album = () => <LibraryCardList variant="album" items={AlbumData} />;

export const Playlist = () => <LibraryCardList variant="playlist" items={PlaylistData} />;
