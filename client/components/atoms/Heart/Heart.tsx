import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface HeartProps {
    isSelected: boolean;
}

const Container = styled.div`
`;

const Heart = ({ isSelected }: HeartProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }
    return(
        <Container onClick = { onClickHandler }>
            {isClicked && <FavoriteIcon style={{ color: '#FF1150' }}/>}
            {!isClicked && <FavoriteBorderIcon/>}
        </Container>
        )
};

export default Heart;
