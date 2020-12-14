import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { requestByCookie } from '@utils/apis';
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

const ArtistLibrary = ({ artistData }) => {
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryArtist }}>
            <LibraryContainer>
                <LibraryHeaderContainer>
                    <LibraryHeader sort="artist" />
                </LibraryHeaderContainer>
                {artistData.length !== 0 ? (
                      <LibraryContentsContainer>
                          <ComponentInfoWrapper componentId={contentType.artist}>
                              <LibraryCardList variant="artist" items={artistData} />
                          </ComponentInfoWrapper>
                      </LibraryContentsContainer>
                  ) : (
                      <NoDataContainer type="artist" />
                  )}
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async ({req, res}) => {
    const artistData = await requestByCookie(req, res, apiUrl.libraryArtist);
    return {
        props: {
            artistData,
        },
    };
};

export default ArtistLibrary;
