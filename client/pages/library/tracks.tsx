import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import apiUrl from 'constants/apiUrl';
import { getTokenFromCtx } from '@utils/cookies';
import { request } from '@utils/apis';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { page, contentType } from '@constants/identifier';
import NoDataContainer from '@components/molecules/NoDataContainer';

import { useSelector, useDispatch } from 'react-redux';

import { addToUpNext, addToUpNextAndPlay } from 'reducers/musicPlayer';

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
    const dispatch = useDispatch();
    const onAddUpNextAndPlayHandler = () => {
        dispatch(addToUpNextAndPlay(trackData));
    };
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryTrack }}>
            <LibraryContainer>
                <LibraryHeaderContainer>
                    <LibraryHeader sort="track" onAddUpNextAndPlayHandler={onAddUpNextAndPlayHandler} />
                </LibraryHeaderContainer>
                {trackData.length !== 0 ? (
                    <LibraryContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.track}>
                            <LibraryTrackListContainer>
                                <TrackRowList items={trackData} />
                            </LibraryTrackListContainer>
                        </ComponentInfoWrapper>
                    </LibraryContentsContainer>
                ) : (
                    <NoDataContainer type="track" />
                )}
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async (context) => {
    const token = getTokenFromCtx(context);
    const trackData = await request(apiUrl.libraryTrack, {}, token);

    if (!trackData) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            trackData,
        },
    };
};

export default TrackLibrary;
