import React from 'react';
import ContentsThumbnail from './ContentsThumbnail';

export default {
    title: 'Molecules/ContentsThumbnail',
    component: ContentsThumbnail,
};

const data = {
    id: 1,
    imageUrl: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906'
}

export const News = () => <ContentsThumbnail data={data} sort='news' />;

export const MainMagazine = () => <ContentsThumbnail data={data} sort='todayMagazine' />;

export const NormalMagazine = () => <ContentsThumbnail data={data} sort='normalMagazine' />;

export const RecommendPlaylist = () => <ContentsThumbnail data={data} sort='recommendPlaylist' />;

export const NormalPlaylist = () => <ContentsThumbnail data={data} sort='normalPlaylist' />;
