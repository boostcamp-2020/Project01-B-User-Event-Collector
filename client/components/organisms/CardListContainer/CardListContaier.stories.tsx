import React from 'react';
import CardListContainer from './CardListContainer';
import { MagazineSort } from '@interfaces/props';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import NewsCardList from '@components/organisms/CardLists/NewsList';

export default {
    title: 'CardListContainer',
    component: CardListContainer,
};

const Magazinesdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
    title: `이 주의 디깅 #77 
    이영지 새 앨범 발표`,
    date: '2020.11.25',
    sort: MagazineSort.main,
});

const Newsdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
    title: `이영지가 새 앨범을 발표했습니다`,
});

export const Magazine = () => (
    <CardListContainer title="매거진" href="/">
        <MagazineCardList variant="row" items={Magazinesdata} />
    </CardListContainer>
);

export const Default = () => (
    <CardListContainer title="NEWS">
        <NewsCardList items={Newsdata} />
    </CardListContainer>
);
