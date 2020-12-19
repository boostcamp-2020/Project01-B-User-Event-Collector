import styled from 'styled-components';
import Text from '@components/atoms/Text';
import { ChartCardProps } from '@interfaces/props';
import ChartCardList from '@components/organisms/CardLists/ChartCardList';
import GenreCardList from '@components/organisms/CardLists/GenreCardList';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import { request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { Track } from '@components/organisms/Library/LibraryHeader/LibraryHeader.stories';

const Container = styled.div`
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 150px 225px;
`;

const Header = styled.div`
    width: 960px;
    display: flex;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const ContentsContainer = styled.div`
    width: 960px;
`;

const ChartContainer = styled.div`
    border-bottom: 1px #d7d7d7 solid;
`;

const ChartCards: ChartCardProps[] = Array(30).fill({
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
    },
});

const Albumdata = Array(9).fill({
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

const Chart = ({ chartData, recentAlbumData }) => {
    return (
        <Container>
            <Header>
                <Text variant="tertiary">차트</Text>
            </Header>
            <ContentsContainer>
                <ChartContainer>
                    <CardListContainer title="실시간 TOP 100" href="/">
                        <ChartCardList items={chartData} unit={5} />
                    </CardListContainer>
                </ChartContainer>
                <ChartContainer>
                    <CardListContainer title="장르 바로가기">
                        <GenreCardList />
                    </CardListContainer>
                </ChartContainer>
                <CardListContainer title="최신 앨범" href="/album/sample">
                    <ContentsCardList variant="album" items={recentAlbumData} />
                </CardListContainer>
            </ContentsContainer>
        </Container>
    );
};

export async function getServerSideProps() {
    let [chartData, recentAlbumData] = await Promise.all([request(apiUrl.chart), request(apiUrl.album)]);

    if (!chartData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            chartData,
            recentAlbumData: recentAlbumData ? recentAlbumData : [],
        },
    };
}

export default Chart;
