import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { getTokenFromCtx } from '@utils/cookies';
import { request } from '@utils/apis';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { page, contentType } from '@constants/identifier';
import NoDataContainer from '@components/molecules/NoDataContainer';
import Button from '@components/atoms/Button';
import { useSelector, useDispatch } from 'react-redux';
import { showPlaylistAddModal, hidePlaylistAddModal } from '@reducers/playlist';
import PlaylistAddModal from '@components/organisms/PlaylistModal/PlaylistAddModal';

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

const ButtonContainer = styled.div`
    width: 960px;
    margin: 0px 0px 30px 0px;
    display: flex;
`;

const LibraryContentsContainer = styled.div``;

const PlaylistLibrary = ({ playlistData }) => {
    const dispatch = useDispatch();
    const { showModal } = useSelector(state => state.playlist);
    const [playlist, setPlaylist] = useState(playlistData);
    const showPlaylistAddModalHandler = () => {
        dispatch(showPlaylistAddModal());
    }
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryPlaylist }}>
            <LibraryContainer>
            {showModal && <PlaylistAddModal playlist = {playlist} onSubmit={setPlaylist}/>}
                <LibraryHeaderContainer>
                    <LibraryHeader sort="playlist" />
                </LibraryHeaderContainer>
                <ButtonContainer>
                    <Button onClick={showPlaylistAddModalHandler}>새 플레이리스트 만들기</Button>
                </ButtonContainer>
                {playlist.length !== 0 ? (
                    <LibraryContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.playlist}>
                            <LibraryCardList variant="playlist" items={playlist} />
                        </ComponentInfoWrapper>
                    </LibraryContentsContainer>
                ) : (
                    <NoDataContainer type="playlist" />
                )}
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async (context) => {
    const token = getTokenFromCtx(context);
    const playlistData = await request(apiUrl.libraryPlaylist, {}, token);

    if (!playlistData) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            playlistData,
        },
    };
};

export default PlaylistLibrary;
