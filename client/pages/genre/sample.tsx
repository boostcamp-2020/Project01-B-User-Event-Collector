import React from 'react';
import styled from 'styled-components';
import Text from '@components/atoms/Text';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

const Container = styled.div`
    padding-left: 225px;
`;
const Header = styled.header``;
const Contents = styled.div``;
const ContentsContainer = styled.div``;

const Albumdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608',
    href: 'localhost:3000',
    title: 'Blue Skies',
    artist: 'Birdy',
});

const GenreData = {
    id: 1,
    title: '국내 힙합',
    latestAlbum: '',
    top100: '',
    artist: '',
    featuredPlaylist: '',
    artistPlaylist: '',
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
                    <ContentsCardList variant="album" items={Albumdata}></ContentsCardList>
                </CardListContainer>
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 장르
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 대표아티스트
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 추천 플레이리스트
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 아티스트 플레이리스트
                }
            </ContentsContainer>
        </Contents>
    </Container>
);

export default Genre;
