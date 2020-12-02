import React from 'react';
import AlbumCard from './AlbumCard';

export default {
    title: 'Organisms/AlbumCard',
    component: AlbumCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/album/005/055/5055127.jpg?type=r360Fll&v=20201030175910';
const STORY_HREF = 'localhost:3000';

const STORY_TITLE = 'PREP ALBUM';
const STORY_ARTIST = 'PREP';

export const Default = () => <AlbumCard title={STORY_TITLE} artist={STORY_ARTIST} src={STORY_SRC} href={STORY_HREF} />;
