import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import { request } from 'utils/apis';
import apiUrl from 'constants/apiUrl';

const Artistdata = Array(9).fill({
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        id: 1,
        name: "랩/힙합"
    }
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

const ThisMonth = ({ PlaylistData, TrackData }) => {
    return (
        <Container>
            <Header>
                <DetailHeader sort = "playlist" data = {PlaylistData}/>
            </Header>
            <ContentsContainer>
                <ContentsButtonGroup />
                <TrackListContainer>
                    <TrackRowList items={TrackData} />
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

export async function getServerSideProps(context) {
    const PlaylistData = await request(apiUrl.playlist + `/9`);
    const TrackData = PlaylistData?.tracks;

    // TODO: error handling

    return {
        props: {
            PlaylistData,
            TrackData
        },
    };
}
export default ThisMonth;