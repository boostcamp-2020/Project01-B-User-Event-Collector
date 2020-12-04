import React from 'react';
import styled from 'styled-components';
import Text from '@components/atoms/Text';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import ChartCardList from '@components/organisms/CardLists/ChartCardList';

const Container = styled.div`
    padding-left: 225px;
    padding-bottom: 90px;
    min-width: 1284px;
`;
const Header = styled.header`
    margin: 60px auto 30px auto;
    width: 960px;
`;
const Contents = styled.div``;
const ContentsContainer = styled.div`
    & + & {
        border-top: 1px solid #ececec;
    }
`;

const Albumdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608',
    href: 'localhost:3000',
    title: 'Blue Skies',
    artist: 'Birdy',
});
const Chartdata = Array(30).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    rank: 1,
    artist: '방탄소년단',
    trackTitle: 'dynamite',
});
const Artistdata = Array(9).fill({
    name: '이영지',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
});
const FeaturedPlaylistdata = Array(9).fill({
    src: 'https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png',
    href: 'localhost:3000',
    title: '한국 힙합 트렌드',
    description: 'VIBE 국내 힙합',
});
const ArtistPlaylistdata = Array(10).fill({
    title: '이영지 대표곡',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=f674_674_repre3&v=2020113005',
    href: '#',
    description: 'VIBE',
});
const GenreData = {
    id: 1,
    title: '국내 힙합',
    latestAlbum: Albumdata,
    top100: Chartdata,
    artist: Artistdata,
    featuredPlaylist: FeaturedPlaylistdata,
    artistPlaylist: ArtistPlaylistdata,
};

const Genre = () => (
    <Container>
        <Header>
            <h3>
                <Text variant="tertiary">국내힙합</Text>
            </h3>
        </Header>
        <Contents>
            <ContentsContainer>
                <CardListContainer title={`${GenreData.title} 최신 앨범`} href="#">
                    <ContentsCardList variant="album" items={GenreData.latestAlbum} />
                </CardListContainer>
            </ContentsContainer>
            <ContentsContainer>
                <CardListContainer title="장르 Top 100" href="#">
                    <ChartCardList items={GenreData.top100} unit={4} />
                </CardListContainer>
            </ContentsContainer>
            <ContentsContainer>
                <CardListContainer title="대표 아티스트" href="#">
                    <ContentsCardList variant="artist" items={GenreData.artist} />
                </CardListContainer>
            </ContentsContainer>
            <ContentsContainer>
                <CardListContainer title={`${GenreData.title} 추천 플레이리스트`} href="#">
                    <ContentsCardList variant="playlist" items={GenreData.featuredPlaylist} />
                </CardListContainer>
            </ContentsContainer>
            <ContentsContainer>
                <CardListContainer title={`${GenreData.title} 아티스트 플레이리스트`} href="#">
                    <ContentsCardList variant="playlist" items={GenreData.artistPlaylist} />
                </CardListContainer>
            </ContentsContainer>
        </Contents>
    </Container>
);

export default Genre;
