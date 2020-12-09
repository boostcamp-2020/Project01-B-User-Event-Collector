import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
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

const Album = ({ albumData, trackData, relatedAlbumData }) => {
    return (
        <Container>
            <Header>
                <DetailHeader sort="album" data={albumData} />
            </Header>
            <ContentsContainer>
                <ContentsButtonGroup />
                <TrackListContainer>
                    <TrackRowList items={trackData} />
                </TrackListContainer>
                {relatedAlbumData && relatedAlbumData.length > 0 && (
                    <ContentsContainer>
                        <CardListContainer title="관련 아티스트 앨범">
                            <ContentsCardList variant="album" items={relatedAlbumData} />
                        </CardListContainer>
                    </ContentsContainer>
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

    const albumData = await request(`${apiUrl.album}/${id}`);
    const trackData = albumData?.tracks;
    const relatedAlbumData = albumData?.relatedAlbums;

    if (!albumData || !trackData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            albumData,
            trackData,
            relatedAlbumData,
        },
    };
}

export default Album;
