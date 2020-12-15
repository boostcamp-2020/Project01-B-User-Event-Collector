import React, { MouseEvent, useState, useContext } from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import apiUrl from '@constants/apiUrl';
import { addToLibrary, deleteFromLibrary } from '@utils/apis';

interface AddButtonProps {
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
}

const Container = styled.div`
    margin-top: 7px;
    margin-left: 10px;
`;

const AddButton = ({ onClick, variant }: AddButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const componentInfo = useContext(ComponentInfoContext);

    const onClickHandler = () => {
        if (isClicked) {
            addToLibrary(`${apiUrl.libraryAlbum}`, { data: { id: componentInfo.data.id } });
        } else {
            deleteFromLibrary(`${apiUrl.libraryAlbum}/${componentInfo.data.id}`);
        }
        setIsClicked(!isClicked);
    };
    return (
        <Container onClick={onClickHandler}>
            {isClicked && <AddIcon />}
            {!isClicked && <CheckIcon />}
        </Container>
    );
};

export default AddButton;
