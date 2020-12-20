import React from 'react';
import ArtistHeader from './ArtistHeader';

export default {
    title: 'Organisms/ArtistHeader',
    component: ArtistHeader,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_NAME = '이영지';
const STORY_GENRE = '랩/힙합';

export const Default = () => <ArtistHeader src={STORY_SRC} name={STORY_NAME} genre={STORY_GENRE} />;
