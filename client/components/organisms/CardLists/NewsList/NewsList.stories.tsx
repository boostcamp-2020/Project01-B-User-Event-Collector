import React from 'react';
import NewsList from './NewsList';

export default {
    title: 'NewsList',
    component: NewsList,
};

const Newsdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
    title: `이영지가 새 앨범을 발표했습니다`,
});

export const Default = () => (
        <NewsList items={Newsdata} />
);
