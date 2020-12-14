import styled from 'styled-components';

import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input/Input';
import { useState } from 'react';

interface PlaylistAddModalContainer {
    visible: boolean;
}

const ModalContainer = styled.div<PlaylistAddModalContainer>`
    visibility : ${(props) => (props.visible === true ? 'visible;' : 'hidden;')}
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

interface PlaylistAddModalProps {
    visibility: boolean;
}

const PlaylistAddModal = ({ visibility }: PlaylistAddModalProps) => {
    const [visible, setVisible] = useState(visibility);
    const [title, setTitle] = useState('');
    const modalOff = (e) => {
        setVisible(!visible);
    };
    const onChangeInput = (e) => {
        setTitle(e.target.value);
    };
    const createNewPlaylist = (e) => {};
    return (
        <ModalContainer visible={visible}>
            <Modal>
                <HeaderContainer>새 플레이리스트</HeaderContainer>
                <InputContainer>
                    <Input variant="newPlaylist" name="newPlaylist" value={title} onChange={onChangeInput} />
                </InputContainer>
                <ButtonContainer>
                    <Button onClick={modalOff}>취소</Button>
                    <Button variant="primary">확인</Button>
                </ButtonContainer>
            </Modal>
        </ModalContainer>
    );
};

export default PlaylistAddModal;
