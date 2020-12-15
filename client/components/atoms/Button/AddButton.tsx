import React, { MouseEvent, useState, useContext } from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

interface AddButtonProps {
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    variant?: 'primary';
    liked: boolean;
}

const Container = styled.div`
    margin-top: 7px;
    margin-left: 10px;
`;

const AddButton = ({ onClick, variant, liked }: AddButtonProps) => {
    return (
        <Container onClick={onClick}>
            {!liked && <AddIcon />}
            {liked && <CheckIcon />}
        </Container>
    );
};

export default AddButton;
