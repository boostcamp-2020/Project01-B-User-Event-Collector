import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

const TrackDatas = Array(20).fill({
    albumImgSrc: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackId: '1',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '미란이',
    albumTitle: '쇼미더머니 9 Episode 1',
    lyrics: '아직 없음ㅎ'
});

const albumData = 
{
    src: "https://musicmeta-phinf.pstatic.net/album/004/491/4491829.jpg?type=r360Fll&v=20200808020212",
    title: "Rio Loves Tokyo Part 1",
    artist: "김승민",
    releasedDate: "2020.03.20",
    genre: "랩/힙합",
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
    Mixed by 배재한 @등대사운드`
}

const Artistdata = Array(9).fill({
    name: '이영지',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
});

const Container = styled.div`
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 150px 225px;
`;

const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
`;

const ContentsContainer = styled.div`
    width: 960px;
`;

const TrackListContainer = styled.div`
    margin: 30px 0 0 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 50px;
`;

const ArtistListContainer = styled.div`
`;

const Album = () => {
    return (
        <Container>
            <Header>
                <DetailHeader sort = "album" data = {albumData}/>
            </Header>
            <ContentsContainer>
                <ContentsButtonGroup />
                <TrackListContainer>
                    <TrackRowList items={TrackDatas} />
                </TrackListContainer>
                <ArtistListContainer>
                    <CardListContainer title="연관 아티스트">
                    <ContentsCardList variant="artist" items={Artistdata} />
                </CardListContainer>
                </ArtistListContainer>
            </ContentsContainer>
        </Container>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Album;