import styled from 'styled-components';
import ArtistHeader from '@components/organisms/ArtistHeader/ArtistHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Text from '@components/atoms/Text';
import { request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';

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

const ArtistListContainer = styled.div``;

const Artist = ({ artistData, trackData }) => {
    return (
        <Container>
            <Header>
                <ArtistHeader src={artistData.imageUrl} name={artistData.name} genre={artistData.genre.name} />
            </Header>
            <ContentsContainer>
                {trackData && trackData.length > 0 ? (
                    <>
                        <ContentsButtonGroup />
                        <TrackListContainer>
                            <TrackRowList items={trackData} />
                        </TrackListContainer>
                    </>
                ) : (
                    <Text>아티스트의 곡이 없습니다.</Text>
                )}
                {/* <ArtistListContainer>
                    <CardListContainer title="연관 아티스트">
                        <ContentsCardList variant="artist" items={Artistdata} />
                    </CardListContainer>
                </ArtistListContainer> */}
            </ContentsContainer>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    const artistData = await request(apiUrl.artist + `/${id}`);
    const trackData = artistData?.tracks;

    if (!artistData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            artistData,
            trackData,
        },
    };
}

export default Artist;
