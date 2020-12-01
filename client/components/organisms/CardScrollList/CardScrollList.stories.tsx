import React from 'react';
import CardScrollList from './CardScrollList';
import { MagazineSort } from '@interfaces/props';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

export default {
    title: 'CardScrollList',
    component: CardScrollList,
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

const Albumdata = Array(9).fill({
    src: "https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608",
    href: 'localhost:3000',
    title: "Blue Skies",
    artist: "Birdy"
});

const Artistdata = Array(9).fill({
    name: '이영지',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
});

const Mixtapedata = Array(9).fill({
    src: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    href: 'localhost:3000',
    title: "나를 위한 믹스테잎",
    artist: "Lana Del Rey, Dua Lipa, 이영지"
});

const Playlistdata = Array(9).fill({
    src: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    href: 'localhost:3000',
    title: "VIBE AND CHILL",
    description: "VIBE"
});

// export const News = () => <CardScrollList type="news" items={Newsdata}/>
export const Magazine = () => (
    <CardScrollList>
        <MagazineCardList variant="row" items={Magazinesdata} />
    </CardScrollList>
);

export const News = () => (
    <CardScrollList>
        <ContentsCardList variant="news" items={Newsdata} />
    </CardScrollList>
);

export const Album = () => (
    <CardScrollList>
        <ContentsCardList variant="album" items={Albumdata} />
    </CardScrollList>
);

export const Artist = () => (
    <CardScrollList>
        <ContentsCardList variant="artist" items={Artistdata} />
    </CardScrollList>
);

export const Mixtape = () => (
    <CardScrollList>
        <ContentsCardList variant="mixtape" items={Mixtapedata} />
    </CardScrollList>
);

export const Playlist = () => (
    <CardScrollList>
        <ContentsCardList variant="playlist" items={Playlistdata} />
    </CardScrollList>
);
