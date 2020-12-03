import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

const playlistData = 
{
    src: "https://music-phinf.pstatic.net/20200109_13/15785370058255nAVe_PNG/%C0%CC%B4%DE%C0%C7%B3%EB%B7%A1_%C1%A4%B9%E6%C7%FC.png",
    title: "이달의 노래 11월",
    description: "최근 발매되어 많은 사랑을 받은 곡들 중에서 VIBE DJ 느낌별 스테이션이 선택한 노래 입니다. 힙터질때, 신났을때, 우울할때, 사랑할때, 사랑했을때, 파티할때, 멍때릴때, 운동할때, 휴식할때 가장 어울리는 VIBE 11월의 느낌을 만나 보세요."
}

const TrackDatas = Array(20).fill({
    albumImgSrc: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackId: '1',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '미란이',
    albumTitle: '쇼미더머니 9 Episode 1',
    href: '/track/sample',
    lyrics: '아직 없음ㅎ'
});

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

const ThisMonth = () => {
    return (
        <Container>
            <Header>
                <DetailHeader sort = "playlist" data = {playlistData}/>
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

export default ThisMonth;