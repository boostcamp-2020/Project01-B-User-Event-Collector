import styled from 'styled-components';
import Text from '@components/atoms/Text';
import { ChartCardProps } from '@interfaces/props';
import ChartCardList from '@components/organisms/CardLists/ChartCardList';
import GenreCardList from '@components/organisms/CardLists/GenreCardList';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

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
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    rank: 1,
    artist: '방탄소년단',
    trackTitle: 'dynamite',
});

const Albumdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608',
    href: 'localhost:3000',
    title: 'Blue Skies',
    artist: 'Birdy',
});

const Chart = () => {
    return (
        <Container>
            <Header>
                <Text variant="tertiary">차트</Text>
            </Header>
            <ContentsContainer>
                <ChartContainer>
                    <CardListContainer title="오늘 TOP 100" href="/">
                        <ChartCardList items={ChartCards} unit={5} />
                    </CardListContainer>
                </ChartContainer>
                <ChartContainer>
                    <CardListContainer title="국내 급상승" href="/">
                        <ChartCardList items={ChartCards} unit={5} />
                    </CardListContainer>
                </ChartContainer>
                <ChartContainer>
                    <CardListContainer title="음악 검색 Top 100" href="/">
                        <ChartCardList items={ChartCards} unit={5} />
                    </CardListContainer>
                </ChartContainer>
                <ChartContainer>
                    <CardListContainer title="장르 바로가기">
                        <GenreCardList />
                    </CardListContainer>
                </ChartContainer>
                <CardListContainer title="최신 앨범" href="/album/sample">
                    <ContentsCardList variant="album" items={Albumdata} />
                </CardListContainer>
            </ContentsContainer>
        </Container>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Chart;
