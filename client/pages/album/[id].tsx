import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import { request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';

const albumData = {
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
    tracks: [
        {
            id: 4,
            title: '그냥',
            lyrics: '',
            playtime: 120,
            albumId: 1,
            artist: {
                id: 3,
                name: '이영지',
            },
            album: {
                id: 11,
                title: '그냥',
                imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg',
            },
            liked: 0,
        },
    ],
};

const TrackDatas = albumData.tracks;

const Artistdata = Array(9).fill({
    id: 3,
    name: '이영지',
    imageUrl: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg',
    genre: {
        id: 1,
        name: '랩/힙합',
    },
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
