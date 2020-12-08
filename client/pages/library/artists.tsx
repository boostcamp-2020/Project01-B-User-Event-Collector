import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { request } from '@utils/apis';

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

const ArtistLibrary = ({ artistData }) => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="artist" />
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryCardList variant="artist" items={artistData} />
            </LibraryContentsContainer>
        </LibraryContainer>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/
export async function getServerSideProps() {
    const artistData = await request(apiUrl.libraryArtist);
    return {
        props: {
            artistData,
        },
    };
}
export default ArtistLibrary;
