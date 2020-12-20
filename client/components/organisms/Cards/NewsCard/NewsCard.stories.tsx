import React from 'react';
import NewsCard from './NewsCard';

export default {
    title: 'Organisms/NewsCard',
    component: NewsCard,
};

const Newsdata = 
{
    id: 2,
    title: "블랙핑크가 데뷔 첫 온라인 콘서트를 합니다",
    imageUrl: "https://music-phinf.pstatic.net/20201204_242/1607046595052EDJxR_JPEG/blackpink_400.jpg?type=f310_182",
    date: "2020-12-06",
    link: "https://www.yna.co.kr/view/AKR20201203094500005?section=entertainment/pop-song",
    albumId: 9
}

export const Default = () => <NewsCard {...(Newsdata)} />;
