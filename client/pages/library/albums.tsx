import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';

const Albumdata = Array(9).fill({
    src: "https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608",
    href: 'localhost:3000',
    title: "Blue Skies",
    artist: "Birdy"
});

const LibraryContainer = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
`;

const LibraryHeaderContainer = styled.div`
    margin: 50px 0 30px 0;
`;

const LibraryContentsContainer = styled.div`

`;

const AlbumLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort = "album"/>
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryCardList variant="album" items={Albumdata} />
            </LibraryContentsContainer>
        </LibraryContainer>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default AlbumLibrary;