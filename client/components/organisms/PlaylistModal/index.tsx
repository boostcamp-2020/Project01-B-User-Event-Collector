import styled from 'styled-components';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PlaylistRowCard from '@components/organisms/PlaylistModal/PlaylistRowCard';
import NewPlaylistButton from '@components/organisms/PlaylistModal/NewPlaylistButton';
import PlaylistAddModal from './PlaylistAddModal';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPlaylistAddModal, hidePlaylistAddModal } from '@reducers/playlist';
import { addToLibrary, deleteFromLibrary, requestPlaylists } from '@utils/apis';
import apiUrl from 'constants/apiUrl';

const ModalContainer = styled.div`
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30000;
    background-color: rgba(0,0,0,.4);
    outline: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    width: 360px;
    height: 360px;
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row-reverse;
    width: 360px;
    margin-right: 10px;
`;

const HeaderContainer = styled.div`
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    font-weight: 700;
`;

const PlaylistContainer = styled.div`
    width: 320px;
    overflow: scroll;
    margin: 20px 0;
    flex: 7;
`;

interface PlaylistModalProps {
    data;
    onClickFunc?: any;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const PlaylistModal = ({ data,  onClickFunc, handleClick }: PlaylistModalProps) => {
    const dispatch = useDispatch();
    const { showModal } = useSelector(state => state.playlist);

    const [playlistData, setPlaylistData] = useState(data);

    const showPlaylistAddModalHandler = () => {
        dispatch(showPlaylistAddModal());
    }

    return (
        <ModalContainer>
            {showModal && <PlaylistAddModal playlist = {playlistData} onSubmit={setPlaylistData}/>}
            <Modal>
                <ButtonContainer>
                    <IconButton icon={CloseIcon} variant="plainBlackRegular" onClick={onClickFunc} />
                </ButtonContainer>
                <HeaderContainer>내 플레이리스트에 추가</HeaderContainer>
                <PlaylistContainer>
                    <NewPlaylistButton onClickFunc={showPlaylistAddModalHandler} />
                    {playlistData ? playlistData.map((d) => <PlaylistRowCard data={d} onClickFunc={handleClick} />) : null}
                </PlaylistContainer>
            </Modal>
        </ModalContainer>
    );
};

export default PlaylistModal;
