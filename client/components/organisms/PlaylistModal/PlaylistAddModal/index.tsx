import styled from 'styled-components';

import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input/Input';
import { useState } from 'react';
import { createPlaylist } from '../../../../utils/apis';
import { useSelector, useDispatch } from 'react-redux';
import { showPlaylistAddModal, hidePlaylistAddModal } from '@reducers/playlist'
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
    height: 200px;
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 10px;
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

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    flex: 1;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 130px;
    justify-content: space-between;
`;

const PlaylistAddModal = ({ playlist, onSubmit }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [disabled, setDisabled] = useState(true);

    const hidePlaylistAddModalHandler = () => {
        dispatch(hidePlaylistAddModal());
    }

    const onChangeInput = (e) => {
        setTitle(e.target.value);
        if (title) setDisabled(false);
        else setDisabled(true);
    };

    const createNewPlaylist = async (e) => {
        if (!title) return;
        const newPlaylist = await createPlaylist({ title: title });
        console.log(newPlaylist);
        onSubmit([...playlist, newPlaylist]);
        hidePlaylistAddModalHandler();
    };

    return (
        <ModalContainer>
            <Modal>
                <HeaderContainer>새 플레이리스트</HeaderContainer>
                <InputContainer>
                    <Input variant="newPlaylist" name="newPlaylist" value={title} onChange={onChangeInput} />
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={hidePlaylistAddModalHandler}>취소</Button>
                    <Button variant="primary" onClick={createNewPlaylist} disabled={disabled}>
                        확인
                    </Button>
                </ButtonContainer>
            </Modal>
        </ModalContainer>
    );
};

export default PlaylistAddModal;
