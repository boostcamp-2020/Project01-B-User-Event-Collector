import React from 'react';
import NewsCard from './NewsCard';

export default {
    title: 'Organisms/NewsCard',
    component: NewsCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_HREF = 'localhost:3000';
const STORY_TITLE = `이영지가 새 앨범을 발표했습니다`;

export const Default = () => <NewsCard title={STORY_TITLE} src={STORY_SRC} newsHref={STORY_HREF} href={STORY_HREF} />;
