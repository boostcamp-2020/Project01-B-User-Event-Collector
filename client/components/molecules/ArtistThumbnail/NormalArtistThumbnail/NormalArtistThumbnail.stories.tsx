import React from 'react';
import NormalArtistThumbnail from './NormalArtistThumbnail';
import NormalArtistThumbnailProps from '@interface/props';

export default {
    title: 'Molecules/NormalArtistThumbnail',
    component: NormalArtistThumbnail,
};

const Artistdata = {
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        id: 1,
        name: "랩/힙합"
    }
};

export const Default = () => (
    <NormalArtistThumbnail {...(Artistdata as NormalArtistThumbnailProps)} />
);
