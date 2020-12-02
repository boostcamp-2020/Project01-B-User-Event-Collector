import React from 'react';
import ContentsThumbnail from './ContentsThumbnail';

export default {
    title: 'Molecules/ContentsThumbnail',
    component: ContentsThumbnail,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_HREF = 'localhost:3000';
const STORY_SORT = ['news', 'todayMagazine', 'normalMagazine', 'recommendPlaylist', 'normalPlaylist'];

export const News = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort={STORY_SORT[0]} />;

export const MainMagazine = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort={STORY_SORT[1]} />;

export const NormalMagazine = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort={STORY_SORT[2]} />;

export const RecommendPlaylist = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort={STORY_SORT[3]} />;

export const NormalPlaylist = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort={STORY_SORT[4]} />;
