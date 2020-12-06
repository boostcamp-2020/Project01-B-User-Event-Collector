import React from 'react';
import PlaylistModal from './index';

export default {
    title: 'Organisms/PlaylistModal',
    component: PlaylistModal,
};

const data = 
{ 
    id: 0, 
    imageUrl: "https://musicmeta-phinf.pstatic.net/album/002/440/2440250.jpg?type=r420Fll&v=20200218150707", 
    title: '내가 만든 플레이리스트', 
    trackCount: 50
}

const playlistData = Array(15).fill(data);

export const Default = () => (
    <PlaylistModal visibility = {true} data = {playlistData}/>
);