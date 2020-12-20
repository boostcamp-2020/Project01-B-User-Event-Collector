import React from 'react';
import LibraryHeader from './LibraryHeader';

export default {
    title: 'Organisms/LibraryHeader',
    component: LibraryHeader,
};

export const Mixtape = () => <LibraryHeader sort='mixtape' />;
export const Track = () => <LibraryHeader sort='track' />;
export const Artist = () => <LibraryHeader sort='artist' />;
export const Album = () => <LibraryHeader sort='album' />;
export const Playlist = () => <LibraryHeader sort='playlist' />;
