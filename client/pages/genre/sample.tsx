import styled from 'styled-components';
import Text from '@components/atoms/Text';

const Container = styled.div`
    padding-left: 225px;
`;
const Header = styled.header``;
const Contents = styled.div``;
const ContentsContainer = styled.div``;

const GenreData = {
    id: 1,
    title: '국내 힙합',
    latestAlbum: '',
    top100: '',
    artist: '',
    featuredPlaylist: '',
    artistPlaylist: '',
};

const Genre = () => (
    <Container>
        <Header>
            <h3>
                <Text variant="tertiary">국내힙합</Text>
            </h3>
        </Header>
        <Contents>
            <ContentsContainer>
                {
                    // 최신 앨범
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 장르
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 대표아티스트
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 추천 플레이리스트
                }
            </ContentsContainer>
            <ContentsContainer>
                {
                    // 아티스트 플레이리스트
                }
            </ContentsContainer>
        </Contents>
    </Container>
);

export default Genre;
