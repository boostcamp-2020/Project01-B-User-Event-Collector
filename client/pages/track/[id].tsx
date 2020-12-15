import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Text from '@components/atoms/Text';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';
import { requestByCookie } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { page, contentType, dataType } from '@constants/identifier';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';

const albumdata = Array(9).fill({
    id: 11,
    title: '그냥',
    description:
        '이영지의 새로운 싱글앨범 <그냥>이 발매되었다.\n\n이번 곡은 아티스트 이영지가 그 동안 보여줘 왔던 기존 곡들과는 사뭇 다른 감성으로 우리에게 다가온다.\n\n2019년 11월 첫번째 발표곡 <암실>을 시작으로 약 6개월간 5곡의 작품을 발표한 이영지는 자신의 음악적 스펙트럼을 계속해서 확장해 나가며 다양한 음악을 우리에게 선사하고 있다.\n\n감성짙은 이번 싱글앨범 <그냥>은 우리에게 그녀의 또 다른 새로운 시작을 알리고 있다.',
    releaseDate: '2020-05-07',
    imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg',
    artist: {
        id: 3,
        name: '이영지',
    },
});

const playlistdata = Array(9).fill({
    id: 1,
    title: 'VIBE AND CHILL',
    subTitle: '',
    description: 'VIBE',
    imageUrl: 'https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png',
    customized: false,
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

const Contents = styled.div`
    margin: 0px 0 0px 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 50px;
`;

const ScrollContents = styled.div`
    margin: 0px 0 0px 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 0px;
`;

const ContentsHeader = styled.div`
    margin: 30px 0 10px 0;
`;

const Lyrics = styled.div`
    height: 300px;
    overflow: scroll;
`;

const BelongAlbum = styled.div``;

const Track = ({ trackData, belongAlbumData }) => {
    return (
        <ComponentInfoContext.Provider
            value={{ componentId: `${page.track}-${trackData.id}`, data: { type: dataType.track, id: trackData.id } }}
        >
            <Container>
                <ComponentInfoWrapper componentId={contentType.summaryHeader}>
                    <Header>
                        <DetailHeader sort="track" data={trackData} />
                    </Header>
                </ComponentInfoWrapper>
                <ContentsContainer>
                    <Contents>
                        <ContentsHeader>
                            <Text variant="regularStrong">가사</Text>
                        </ContentsHeader>
                        <Lyrics>
                            {trackData.lyrics.split('\n').map((line) => {
                                return (
                                    <Text variant="primary">
                                        {line}
                                        <br />
                                    </Text>
                                );
                            })}
                        </Lyrics>
                    </Contents>
                    <Contents>
                        <ComponentInfoWrapper
                            componentId={contentType.album}
                            data={{ type: dataType.album, id: belongAlbumData.id }}
                        >
                            <ContentsHeader>
                                <Text variant="regularStrong">수록 앨범</Text>
                            </ContentsHeader>
                            <BelongAlbum>
                                <AlbumCard {...belongAlbumData} />
                            </BelongAlbum>
                        </ComponentInfoWrapper>
                    </Contents>
                    <ScrollContents>
                        <CardListContainer title="관련 아티스트 앨범">
                            <ContentsCardList variant="album" items={albumdata} />
                        </CardListContainer>
                    </ScrollContents>
                    <ScrollContents>
                        <CardListContainer title="관련 플레이리스트">
                            <ContentsCardList variant="playlist" items={playlistdata} />
                        </CardListContainer>
                    </ScrollContents>
                </ContentsContainer>
            </Container>
        </ComponentInfoContext.Provider>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    const { req, res } = context;
    const trackData = await requestByCookie(req, res, `${apiUrl.track}/${id}`);
    const belongAlbumData = { ...trackData?.album, artist: trackData?.artist };

    if (!trackData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            trackData,
            belongAlbumData,
        },
    };
}

export default Track;
