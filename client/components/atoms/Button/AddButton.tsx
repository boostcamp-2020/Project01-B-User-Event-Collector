import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

interface AddButtonProps {
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
}

const Container = styled.div`
    margin-top: 7px;
    margin-left: 10px;
`;

const AddButton = ({
  onClick, variant
}: AddButtonProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }
    return(
        <Container onClick = { onClickHandler }>
            {isClicked && <AddIcon />}
            {!isClicked && <CheckIcon />}
        </Container>
        )};

export default AddButton;
