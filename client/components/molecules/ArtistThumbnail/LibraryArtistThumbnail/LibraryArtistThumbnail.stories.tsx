import React from 'react';
import LibraryArtistThumbnail from './LibraryArtistThumbnail';
import { LibraryArtistThumbnailProps } from '@interfaces/props';

export default {
    title: 'Molecules/LibraryArtistThumbnail',
    component: LibraryArtistThumbnail,
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
    <LibraryArtistThumbnail {...(Artistdata as LibraryArtistThumbnailProps)} />
);
