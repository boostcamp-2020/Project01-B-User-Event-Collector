import React from 'react';
import LibraryCardList from './LibraryCardList';

export default {
    title: 'Organisms/LibraryCardList',
    component: LibraryCardList,
};

const AlbumData = Array(9).fill({
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

const MixtapeData = Array(9).fill({
    id: 1,
    title: "나를 위한 믹스테잎",
    subTitle: "",
    description: "Lana Del Rey, Dua Lipa, 이영지",
    imageUrl: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    customized: false
});

const PlaylistData = Array(9).fill({
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
});

const ArtistData = Array(9).fill({
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        id: 1,
        name: "랩/힙합"
    }
});

export const Mixtape = () => <LibraryCardList variant="mixtape" items={MixtapeData} />;

export const Artist = () => <LibraryCardList variant="artist" items={ArtistData} />;

export const Album = () => <LibraryCardList variant="album" items={AlbumData} />;

export const Playlist = () => <LibraryCardList variant="playlist" items={PlaylistData} />;
