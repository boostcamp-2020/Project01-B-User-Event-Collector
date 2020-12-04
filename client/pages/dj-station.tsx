import styled from 'styled-components';
import Text from '@components/atoms/Text/Text';
import StationCardList from '../components/organisms/CardLists/StationCardList/StationCardList';

const StationCardsData = Array(20).fill({
    src: 'https://music-phinf.pstatic.net/20181204_11/1543918826895DFvFt_PNG/mood_3_Happy.png?type=f360',
    href: '#',
    sort: '',
});

const GenreStationCardsData = Array(20).fill({
    src: 'https://music-phinf.pstatic.net/20190717_123/1563372175687SzUib_PNG/dj_3_genre_25.png?type=f360',
    href: '#',
    sort: '',
});

const Container = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
`;

const HeaderContainer = styled.div`
    width: 50%;
    margin: 60px 0 30px 0;
`;

const ContentsContainer = styled.div`
    width: 50%;
`;

const StationContainer = styled.div`
    width: 980px;
    padding: 10px 0 30px 0;
    border-bottom: 1px solid #dddddd;
`;

const StationTitleContainer = styled.div`
    margin: 20px 0 10px 0;
`;

const StationCardContainer = styled.div`
    width: 100%;
`;

const DJStation = () => {
    return (
        <Container>
            <HeaderContainer>
                <Text variant="tertiary">DJ 스테이션</Text>
            </HeaderContainer>
            <ContentsContainer>
                <StationContainer>
                    <StationTitleContainer>
                        <Text variant="regularStrong">느낌별 스테이션</Text>
                    </StationTitleContainer>
                    <StationCardContainer>
                        <StationCardList items={StationCardsData} />
                    </StationCardContainer>
                </StationContainer>
                <StationContainer>
                    <StationTitleContainer>
                        <Text variant="regularStrong">장르 스테이션</Text>
                    </StationTitleContainer>
                    <StationCardContainer>
                        <StationCardList items={GenreStationCardsData} />
                    </StationCardContainer>
                </StationContainer>
            </ContentsContainer>
        </Container>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default DJStation;
