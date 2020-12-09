import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { request } from '@utils/apis';
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

const ArtistLibrary = ({ artistData }) => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="artist" />
            </LibraryHeaderContainer>
            {artistData.length !== 0 ? (
                <LibraryContentsContainer>
                    <LibraryCardList variant="artist" items={artistData} />
                </LibraryContentsContainer>
            ) : (
                <NoDataContainer type="artist" />
            )}
        </LibraryContainer>
    );
};

export const getServerSideProps = async () => {
    const artistData = await request(apiUrl.libraryArtist);
    return {
        props: {
            artistData,
        },
    };
};
export default ArtistLibrary;
