import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
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

const LibraryContentsContainer = styled.div`
    width: 960px;
`;

const LibraryTrackListContainer = styled.div`
    margin: 30px 0;
`;

const TrackLibrary = ({ trackData }) => {
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryTrack }}>
            <LibraryContainer>
                <LibraryHeaderContainer>
                    <LibraryHeader sort="track" />
                </LibraryHeaderContainer>
                <LibraryContentsContainer>
                    <ComponentInfoWrapper componentId={contentType.track}>
                        <ContentsButtonGroup />
                        <LibraryTrackListContainer>
                            <TrackRowList items={trackData} />
                        </LibraryTrackListContainer>
                    </ComponentInfoWrapper>
                </LibraryContentsContainer>
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};
export const getServerSideProps = async () => {
    const trackData = await request(apiUrl.libraryTrack);
    return {
        props: {
            trackData,
        },
    };
};
export default TrackLibrary;
