import PlaylistRowCard from './index';
import React from 'react';

export default {
    title: 'Organisms/PlaylistRowCard',
    component: PlaylistRowCard,
};

const data = 
{ 
    id: 0, 
    imageUrl: "https://musicmeta-phinf.pstatic.net/album/002/440/2440250.jpg?type=r420Fll&v=20200218150707", 
    title: '내가 만든 플레이리스트', 
    trackCount: 50
};

export const Default = () => (
    <PlaylistRowCard data = { data }/>
);