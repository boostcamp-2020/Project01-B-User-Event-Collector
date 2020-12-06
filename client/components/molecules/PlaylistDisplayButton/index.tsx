import React from 'react';
import styled from 'styled-components';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

interface DisplayButtonProps {
    open: boolean;
    onClick
}

const Container = styled.div<DisplayButtonProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.open ? 'white' : '#747474')};
    background-color: ${(props) => (props.open ? '#ff1150' : 'transparent')};
`;

const PlaylistDisplayButton = ({ open, onClick }: DisplayButtonProps) => {
    return (
        <Container open={open}>
            <MenuOpenIcon style={{ fontSize: '35px' }} onClick = { onClick }/>
        </Container>
    );
};

export default PlaylistDisplayButton;
