import React from 'react';
import PlaylistModal from './index';

export default {
    title: 'Organisms/PlaylistModal',
    component: PlaylistModal,
};

const data = 
{ 
    "id": 1,
    "title": "나만 없어 그 한정판 LP 레코드",
    "subTitle": "",
    "description": null,
    "imageUrl": "https://music-phinf.pstatic.net/20200109_13/15785370058255nAVe_PNG/%C0%CC%B4%DE%C0%C7%B3%EB%B7%A1_%C1%A4%B9%E6%C7%FC.png",
    "customized": false
}

const playlistData = Array(15).fill(data);

export const Default = () => (
    <PlaylistModal visibility = {true} data = {playlistData}/>
);