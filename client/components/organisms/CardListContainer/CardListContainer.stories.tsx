import React from 'react';
import CardListContainer from './CardListContainer';
import { MagazineSort } from '@interfaces/props';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

export default {
    title: 'Organisms/CardListContainer',
    component: CardListContainer,
};

const Magazinesdata = Array(9).fill({
    id: 1,
    title: "나만 없어 그 한정판\nLP 레코드",
    imageUrl: "https://music-phinf.pstatic.net/20201116_25/1605515795782Xy0Kf_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-%C1%A4%B9%E6%C7%FC_11.jpg?type=w720",
    date: "2020-11-19",
    category: "gerne"
});

const Newsdata = Array(9).fill({
    id: 2,
    title: "블랙핑크가 데뷔 첫 온라인 콘서트를 합니다",
    imageUrl: "https://music-phinf.pstatic.net/20201204_242/1607046595052EDJxR_JPEG/blackpink_400.jpg?type=f310_182",
    date: "2020-12-06",
    link: "https://www.yna.co.kr/view/AKR20201203094500005?section=entertainment/pop-song",
    albumId: 9
});

const Albumdata = Array(9).fill({
    id: 11,
    title: "그냥",
    description: "이영지의 새로운 싱글앨범 <그냥>이 발매되었다.\n\n이번 곡은 아티스트 이영지가 그 동안 보여줘 왔던 기존 곡들과는 사뭇 다른 감성으로 우리에게 다가온다.\n\n2019년 11월 첫번째 발표곡 <암실>을 시작으로 약 6개월간 5곡의 작품을 발표한 이영지는 자신의 음악적 스펙트럼을 계속해서 확장해 나가며 다양한 음악을 우리에게 선사하고 있다.\n\n감성짙은 이번 싱글앨범 <그냥>은 우리에게 그녀의 또 다른 새로운 시작을 알리고 있다.",
    releaseDate: "2020-05-07",
    imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg",
    artist: {
        id: 3,
        name: "이영지"
    }
});

const Mixtapedata = Array(9).fill({
    id: 1,
    title: "나를 위한 믹스테잎",
    subTitle: "",
    description: "Lana Del Rey, Dua Lipa, 이영지",
    imageUrl: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    customized: false
});

const Playlistdata = Array(9).fill({
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
});

const Artistdata = Array(9).fill({
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        id: 1,
        name: "랩/힙합"
    }
});

export const Magazine = () => (
    <CardListContainer title="매거진" href="/">
        <MagazineCardList variant="row" items={Magazinesdata} />
    </CardListContainer>
);

export const News = () => (
    <CardListContainer title="NEWS">
        <ContentsCardList variant="news" items={Newsdata} />
    </CardListContainer>
);

export const Album = () => (
    <CardListContainer title="좋아할 최신 앨범" href="/">
        <ContentsCardList variant="album" items={Albumdata} />
    </CardListContainer>
);

export const Artist = () => (
    <CardListContainer title="연관 아티스트">
        <ContentsCardList variant="artist" items={Artistdata} />
    </CardListContainer>
);

export const Mixtape = () => (
    <CardListContainer title="나를 위한 믹스테잎">
        <ContentsCardList variant="mixtape" items={Mixtapedata} />
    </CardListContainer>
);

export const Playlist = () => (
    <CardListContainer title="내 취향 플레이리스트" href="/">
        <ContentsCardList variant="playlist" items={Playlistdata} />
    </CardListContainer>
);
