import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { request } from '@utils/apis';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { page, contentType } from '@constants/identifier';

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

const AlbumLibrary = ({ albumData }) => {
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryAlbum }}>
            <LibraryContainer>
                <LibraryHeaderContainer>
                    <LibraryHeader sort="album" />
                </LibraryHeaderContainer>
                <LibraryContentsContainer>
                    <ComponentInfoWrapper componentId={contentType.album}>
                        <LibraryCardList variant="album" items={albumData} />
                    </ComponentInfoWrapper>
                </LibraryContentsContainer>
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async () => {
    const albumData = await request(apiUrl.libraryAlbum);
    return {
        props: {
            albumData,
        },
    };
};
export default AlbumLibrary;
