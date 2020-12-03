import React from 'react';
import DetailHeader from './index';

export default {
    title: 'Organisms/DetailHeader',
    component: DetailHeader,
};

const mixtapeData = {
    src: 'https://vibeapp.music.naver.com/vibe/v1/cover/mix/2487724,3553414,2836707,4551646/favorite/favorite/',
    title: '최애 믹스테잎',
    artist: '김승민, Ariana Grande, 이영지, Dua Lipa, Lana Del Rey',
};

const playlistData = {
    src: 'https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png',
    title: 'VIBE AND CHILL',
    description: 'VIBE',
};

const albumData = {
    src: 'https://musicmeta-phinf.pstatic.net/album/004/491/4491829.jpg?type=r360Fll&v=20200808020212',
    title: 'Rio Loves Tokyo Part 1',
    artist: '김승민',
    releasedDate: '2020.03.20',
    genre: '랩/힙합',
    description: `1. 10°0' 0° N 118°50 0° E (Feat. ASH ISLAND)
    LYRICS BY 김승민, ASH ISLAND
    COMPOSED BY 김승민, Minit, Chiic
    ARRANGED BY Minit, Chiic
    GUITAR BY Chiic
    Mixed by 배재한 @등대사운드
    Mastered by 배재한 @등대사운드
    
    2. MIA
    LYRICS BY 김승민
    COMPOSED BY 김승민, Minit, Chiic
    ARRANGED BY Minit, Chiic
    GUITAR BY Chiic
    Mixed by 배재한 @등대사운드
    Mastered by 배재한 @등대사운드
    
    3. Untitled #11
    LYRICS BY 김승민
    COMPOSED BY 김승민, Dnss, Swelley
    ARRANGED BY Dnss, Swelley
    Mixed by 배재한 @등대사운드
    Mastered by 배재한 @등대사운드
    
    4. 주유소 (Feat. DEREK, Skinny Brown)
    LYRICS BY 김승민, DEREK, Skinny Brown
    COMPOSED BY 김승민, DEREK, Minit
    ARRANGED BY Minit
    GUITAR BY Chiic
    Mixed by 배재한 @등대사운드
    Mastered by 배재한 @등대사운드
    
    5. 받아인생쓰기
    LYRICS BY 김승민
    COMPOSED BY 김승민, Kevin Twice
    ARRANGED BY Kevin Twice
    Mixed by 배재한 @등대사운드
    Mastered by 배재한 @등대사운드
    
    발매사, 기획사 정보를 제공하는 표
    발매사	소니뮤직
    기획사	Beautiful Noise
    `,
};

export const Mixtape = () => <DetailHeader sort="mixtape" data={mixtapeData} />;

export const Playlist = () => <DetailHeader sort="playlist" data={playlistData} />;

export const Album = () => <DetailHeader sort="album" data={albumData} />;
