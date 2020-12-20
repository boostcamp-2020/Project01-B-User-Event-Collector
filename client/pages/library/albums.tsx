import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { getTokenFromCtx } from '@utils/cookies';
import { request } from '@utils/apis';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { page, contentType } from '@constants/identifier';
import NoDataContainer from '@components/molecules/NoDataContainer';

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
                {albumData.length !== 0 ? (
                    <LibraryContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.album}>
                            <LibraryCardList variant="album" items={albumData} />
                        </ComponentInfoWrapper>
                    </LibraryContentsContainer>
                ) : (
                    <NoDataContainer type="album" />
                )}
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async (context) => {
    const token = getTokenFromCtx(context);
    const albumData = await request(apiUrl.libraryAlbum, {}, token);

    if (!albumData) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            albumData,
        },
    };
};
export default AlbumLibrary;
