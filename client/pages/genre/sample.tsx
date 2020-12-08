import React from 'react';
import styled from 'styled-components';
import Text from '@components/atoms/Text';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import ChartCardList from '@components/organisms/CardLists/ChartCardList';

const Container = styled.div`
    padding: 0 0 225px 90px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    
`;
const Header = styled.header`
    margin: 0 auto;
    padding: 60px 0 30px 0;
    width: 960px;
`;
const Contents = styled.div``;
const ContentsContainer = styled.div`
    width: 960px;
    & + & {
        border-top: 1px solid #ececec;
    }
`;

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

const Chartdata = Array(30).fill({
    id: 5,
    rank: 1,
    title: '그냥',
    album: {
        id: 0,
        imageUrl: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    },
    artist: {
        id: 0,
        name: '이영지',
    }
});

const Artistdata = [
    {
        "id": 3,
        "name": "이영지",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
        "genre": {
            "id": 1,
            "name": "랩/힙합"
        }
    },
    {
        "id": 4,
        "name": "BLACKPINK",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/500/500555.jpg",
        "genre": {
            "id": 2,
            "name": "댄스"
        }
    },
    {
        "id": 5,
        "name": "백예린",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/234/234253.jpg",
        "genre": {
            "id": 3,
            "name": "알앤비/소울"
        }
    },
    {
        "id": 6,
        "name": "새소년",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/829/829598.jpg?type=ff300_300&v=20200510175911",
        "genre": {
            "id": 4,
            "name": "인디뮤직"
        }
    }
];

const FeaturedPlaylistdata = Array(9).fill({
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
});

const ArtistPlaylistdata = Array(9).fill({
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
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
