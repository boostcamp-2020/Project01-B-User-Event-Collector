import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface HeartProps {
    isSelected: boolean;
    sort?: 'musicPlayer';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Container = styled.div``;

const Heart = ({ isSelected, sort, onClick }: HeartProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    };
    return (
        <Container onClick={onClickHandler}>
            {sort !== 'musicPlayer' ? (
                <div onClick={onClick}>
                    {isSelected ? <FavoriteIcon style={{ color: '#FF1150' }} /> : <FavoriteBorderIcon />}
                </div>
            ) : isClicked ? (
                <FavoriteIcon style={{ color: '#FF1150' }} fontSize="small" />
            ) : (
                <FavoriteBorderIcon style={{ color: '#FFFFFF' }} fontSize="small" />
            )}
        </Container>
    );
};

export default Heart;
