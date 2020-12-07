import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';

const Albumdata = Array(9).fill({
    id: 11,
    title: "그냥",
    description: "이영지의 새로운 싱글앨범 <그냥>이 발매되었다.\n\n이번 곡은 아티스트 이영지가 그 동안 보여줘 왔던 기존 곡들과는 사뭇 다른 감성으로 우리에게 다가온다.\n\n2019년 11월 첫번째 발표곡 <암실>을 시작으로 약 6개월간 5곡의 작품을 발표한 이영지는 자신의 음악적 스펙트럼을 계속해서 확장해 나가며 다양한 음악을 우리에게 선사하고 있다.\n\n감성짙은 이번 싱글앨범 <그냥>은 우리에게 그녀의 또 다른 새로운 시작을 알리고 있다.",
    releaseDate: "2020-05-07",
    imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg",
    artist: {
        id: 3,
        name: "이영지"
    }
});

const LibraryContainer = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 300px 225px;
`;

const LibraryHeaderContainer = styled.div`
    margin: 50px 0 30px 0;
`;

const LibraryContentsContainer = styled.div``;

const AlbumLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="album" />
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryCardList variant="album" items={Albumdata} />
            </LibraryContentsContainer>
        </LibraryContainer>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default AlbumLibrary;
