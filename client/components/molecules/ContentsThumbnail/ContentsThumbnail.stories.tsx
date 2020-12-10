import React from 'react';
import ContentsThumbnail from './ContentsThumbnail';

export default {
    title: 'Molecules/ContentsThumbnail',
    component: ContentsThumbnail,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_HREF = 'localhost:3000';

export const News = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort='news' />;

export const MainMagazine = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort='todayMagazine' />;

export const NormalMagazine = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort='normalMagazine' />;

export const RecommendPlaylist = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort='recommendPlaylist' />;

export const NormalPlaylist = () => <ContentsThumbnail src={STORY_SRC} href={STORY_HREF} sort='normalPlaylist' />;
