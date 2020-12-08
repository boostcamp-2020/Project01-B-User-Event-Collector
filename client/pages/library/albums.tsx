import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import axios from 'axios';

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

const AlbumLibrary = ({ Albumdata }) => {
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

export async function getServerSideProps() {
    const response = await axios({
        method: 'GET',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        url: apiUrl.libraryAlbum,
    });
    const Albumdata = response.data.data;
    return {
        props: {
            Albumdata,
        },
    };
}
export default AlbumLibrary;
