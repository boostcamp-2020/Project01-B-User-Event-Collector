import React from 'react';
import MusicPlayer from './index';

export default {
    title: 'Organisms/MusicPlayer',
    component: MusicPlayer,
};

const trackData =     
{
    id: 0,
    title: '그냥',
    artistId: 0,
    artist: { id: 0, name: '이영지' },
    albumId: 0,
    album: { id: 0, title: '그냥', imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg?type=r720Fll&v=20200507115931' },
    lyrics: '가사입니다',
    playtime: '217',
};

const currentPlayList = Array(30).fill(trackData);

export const Default = () => <MusicPlayer tracks = { currentPlayList }/>;