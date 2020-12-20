import styled from 'styled-components';
import Text from '@components/atoms/Text';
import ChartCardList from '@components/organisms/CardLists/ChartCardList';
import GenreCardList from '@components/organisms/CardLists/GenreCardList';
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

const Chart = ({ chartData, recentAlbumData, genreData }) => {
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
                        <GenreCardList items={genreData} />
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
    let [chartData, recentAlbumData, genreData] = await Promise.all([
        request(apiUrl.chart),
        request(apiUrl.album),
        request(apiUrl.genre),
    ]);

    if (!chartData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            chartData,
            recentAlbumData: recentAlbumData ? recentAlbumData : [],
            genreData: genreData ? genreData : [],
        },
    };
}

export default Chart;
