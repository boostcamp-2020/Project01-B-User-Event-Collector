import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import { request, requestByCookie } from 'utils/apis';
import apiUrl from 'constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import { contentType, dataType, page } from '@constants/identifier';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { getTokenFromCtx } from '@utils/cookies';

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

const ThisMonth = ({ PlaylistData, TrackData, ArtistData }) => {
    return (
        <ComponentInfoContext.Provider
            value={{
                componentId: `${page.playlist}-${PlaylistData.id}`,
                data: { type: dataType.playlist, id: PlaylistData.id },
            }}
        >
            <Container>
                <ComponentInfoWrapper componentId={contentType.summaryHeader}>
                    <Header>
                        <DetailHeader sort="playlist" data={PlaylistData} />
                    </Header>
                </ComponentInfoWrapper>
                <ContentsContainer>
                    <ContentsButtonGroup />
                    <TrackListContainer>
                        <TrackRowList items={TrackData} />
                    </TrackListContainer>
                    <ArtistListContainer>
                        <CardListContainer title="연관 아티스트">
                            <ContentsCardList variant="artist" items={ArtistData} />
                        </CardListContainer>
                    </ArtistListContainer>
                </ContentsContainer>
            </Container>
        </ComponentInfoContext.Provider>
    );
};

export async function getServerSideProps(context) {
    const token = getTokenFromCtx(context);
    const PlaylistData = await request(`${apiUrl.playlist}/9`, {}, token);
    const TrackData = PlaylistData?.tracks;
    const ArtistData = await request(`${apiUrl.artist}`, {}, token);
    // TODO: error handling

    return {
        props: {
            PlaylistData,
            TrackData,
            ArtistData
        },
    };
}
export default ThisMonth;
